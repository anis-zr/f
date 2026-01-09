
import React from 'react';
import { useParams } from 'react-router-dom';
import { useWilayaStats } from '@/pages/dashboard/student/Market/useWilayaStats';
import BarChartComponent from './IncomOverView';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosInstance from '@/utils/provider/axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function StateStatsPage() {
  const { state } = useParams(); // "/dashboard/state/:state"
  const { data, isLoading, refetch } = useWilayaStats(state);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const selectedProduct = watch('product');
  const selectedUnit = watch('unit');

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post('/target/targets', {
        product: data.product,
        quantite: Number(data.quantite),
        unit: data.unit,
        wilaya: state,
      });
      await refetch();
      toast.success(' تمت إضافة الهدف بنجاح');
      reset();
    } catch (err) {
      toast.error(' حدث خطأ أثناء الإضافة');
      console.error(' Error in submit:', err?.response?.data || err.message);
    }
  };

  const transformedData = Array.isArray(data)
    ? data.filter(
        (item) =>
          item &&
          typeof item === 'object' &&
          typeof item.quantite === 'number' &&
          typeof item.propose === 'number' &&
          typeof item.product === 'string'
      )
    : [];

const handleDownload = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const sheetData = transformedData.map((item) => ({
    المنتج: item.product,
    "الكمية المحصلة": item.quantite,
    "الهدف المقترح": item.propose,
    الولاية: state,
    التاريخ: currentDate, 
  }));

  const worksheet = XLSX.utils.json_to_sheet(sheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "الإحصائيات");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const fileBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(fileBlob,` إحصائيات_${state}_${currentDate}.xlsx`);
};
 return (
  <div className="w-full max-w-6xl mx-auto p-6 space-y-10">
    <h1 className="text-3xl font-bold text-green-700 text-center">
      📍 إحصائيات ولاية {state}
    </h1>

    {/* ✅ رسم المخطط البياني */}
    <div className='mt-13'>
    <BarChartComponent data={transformedData} wilaya={state} />
</div>
    {/* ✅ زر تحميل Excel */}
    <div className="text-end">
      <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700 text-white">
        📥 تحميل Excel
      </Button>
    </div>

    {/* ✅ نموذج إضافة هدف */}
    <Card className="max-w-lg mx-auto shadow-xl border border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-green-700">🎯 إضافة هدف جديد</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* المنتج */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">المنتج</label>
            <Select onValueChange={(val) => setValue('product', val)} value={selectedProduct || ''}>
              <SelectTrigger>
                <SelectValue placeholder="اختر المنتج" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="جزر">🥕 جزر</SelectItem>
                <SelectItem value="طماطم">🍅 طماطم</SelectItem>
                <SelectItem value="بطاطا">🥔 بطاطا</SelectItem>
                 <SelectItem value="بطاطا"> ثوم</SelectItem>
                  <SelectItem value="بطاطا"> بصل</SelectItem>
                   <SelectItem value="بطاطا">خوخ</SelectItem>
                    <SelectItem value="بطاطا"> تمر</SelectItem>
                           <SelectItem value="بطاطا"> قمح</SelectItem>
                                  <SelectItem value="بطاطا"> بطيخ</SelectItem>
                                     
              </SelectContent>
            </Select>
            {!selectedProduct && (
              <span className="text-red-500 text-sm mt-1 block">يجب اختيار المنتج</span>
            )}
          </div>

          {/* الكمية */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">الكمية المستهدفة</label>
            <Input
              type="number"
              placeholder="أدخل الكمية"
              {...register('quantite', {
                required: 'الكمية مطلوبة',
                min: { value: 1, message: 'يجب أن تكون الكمية أكبر من 0' },
              })}
            />
            {errors.quantite && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.quantite.message}
              </span>
            )}
          </div>

          {/* الوحدة */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">الوحدة (unit)</label>
            <Select onValueChange={(val) => setValue('unit', val)} value={selectedUnit || ''}>
              <SelectTrigger>
                <SelectValue placeholder="اختر وحدة القياس" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">هكتار (ar)</SelectItem>
              </SelectContent>
            </Select>
            {!selectedUnit && (
              <span className="text-red-500 text-sm mt-1 block">يجب اختيار الوحدة</span>
            )}
          </div>

          {/* زر الإرسال */}
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            disabled={!selectedProduct || !selectedUnit}
          >
            💾 حفظ الهدف
          </Button>

        </form>
      </CardContent>
    </Card>
  </div>
);}