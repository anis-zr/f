
import React from 'react';
import { useParams } from 'react-router-dom';
import { useWilayaStats } from '@/pages/dashboard/student/Market/useWilayaStats';
import BarChartComponentt from './BarChartComponetntt';
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
import { useWilayaStatss } from './useWilayaStatss';

export default function Stt() {
  const { statee } = useParams(); // "/dashboard/state/:state"
  const { data, isLoading, refetch } = useWilayaStatss(statee);
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
      await axiosInstance.post('/targett/targetts', {
        product: data.product,
        quantite: Number(data.quantite),
        unit: data.unit,
        wilaya: statee,
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
    الولاية: statee,
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

  saveAs(fileBlob,` إحصائيات_${statee}_${currentDate}.xlsx`);
};
 return (
  <div className="w-full max-w-6xl mx-auto p-6 space-y-10">
    <h1 className="text-3xl font-bold text-green-700 text-center">
      📍 إحصائيات ولاية {statee}
    </h1>

    {/* ✅ رسم المخطط البياني */}
    <BarChartComponentt data={transformedData} wilaya={statee} />

  </div>
);}