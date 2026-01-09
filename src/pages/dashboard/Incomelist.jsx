/*
// src/pages/dashboard/student/crud/IncomeList.jsx
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader as DialogHead, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import axiosInstance from '@/utils/provider/axios';
import { getProductImage } from '@/utils/provider/getProductImage'; // الدالة المساعدة لعرض الصور
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

export default function IncomeList({ budgetId }) {
  const queryClient = useQueryClient();

  // 1) جلب Incomes المرتبطة بالميزانية
  const { data: incomes = [], isLoading } = useQuery({
    queryKey: ['incomes', budgetId],
    queryFn: () => axiosInstance.get(`/income/budget/${budgetId}`).then((res) => res.data)
  });

  // 2) حذف Income
  const deleteMutation = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/income/${id}`),
    onSuccess: () => {
      toast.success('تم حذف الدخل');
      queryClient.invalidateQueries(['incomes', budgetId]);
    },
    onError: () => {
      toast.error('فشل في حذف الدخل');
    }
  });

  // 3) تحديث Income
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => axiosInstance.put(`/income/${id}`, data),
    onSuccess: () => {
      toast.success('تم تحديث الدخل');
      queryClient.invalidateQueries(['incomes', budgetId]);
    },
    onError: () => {
      toast.error('فشل في التحديث');
    }
  });

  // لحفظ بيانات التحرير مؤقتًا
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    product: '',
    quantite: '',
    unit: '',
    date: new Date()
  });

  const handleEditClick = (income) => {
    setEditData(income);
    setForm({
      product: income.product,
      quantite: income.quantite,
      unit: income.unit,
      date: new Date(income.date)
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date }));
  };

  const handleUpdate = async () => {
    await updateMutation.mutateAsync({ id: editData._id, data: { ...form } });
    setEditData(null);
  };

 // if (isLoading) return <p className="text-center mt-6">جاري تحميل البيانات...</p>;
  if (!incomes.length) return <p className="text-center text-gray-500 mt-8">لا توجد بيانات دخل بعد.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {incomes.map((income) => (
        <Card key={income._id} className="relative">
       
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={getProductImage(income.product)}
                  alt={income.product}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <CardTitle className="text-lg">
                  {income.product} – {income.quantite} {income.unit}
                </CardTitle>
              </div>
              <div className="flex gap-2">
              
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => handleEditClick(income)}>
                      <Pencil className="w-4 h-4" />
                    </Button>

</DialogTrigger>
                  {editData && editData._id === income._id && (
                    <DialogContent>
                      <DialogHead>
                        <DialogTitle>تعديل الدخل</DialogTitle>
                      </DialogHead>
                      <div className="space-y-4 mt-4">
                       
                        <div>
                          <label className="block font-medium mb-1">المنتج</label>
                          <select
                            name="product"
                            value={form.product}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          >
                            <option value="">اختر المنتج</option>
                            {['tomate', 'carrote', 'batata'].map((prod) => (
                              <option key={prod} value={prod}>
                                {prod}
                              </option>
                            ))}
                          </select>
                        </div>
                 
                        <div>
                          <label className="block font-medium mb-1">الكمية</label>
                          <input
                            type="number"
                            name="quantite"
                            value={form.quantite}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          />
                        </div>
                    
                        <div>
                          <label className="block font-medium mb-1">الوحدة</label>
                          <select
                            name="unit"
                            value={form.unit}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          >
                            <option value="">اختر الوحدة</option>
                            {['kg', 'ton'].map((u) => (
                              <option key={u} value={u}>
                                {u}
                              </option>
                            ))}
                          </select>
                        </div>
                
                        <div>
                          <label className="block font-medium mb-1">التاريخ</label>
                          <DatePicker
                            selected={form.date}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          />
                        </div>
                      </div>
                      <DialogFooter className="mt-4">
                        <DialogClose asChild>
                          <Button onClick={handleUpdate}>حفظ التعديلات</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  )}
                </Dialog>

         
                <Button variant="destructive" size="icon" onClick={() => deleteMutation.mutate(income._id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-600">
              التاريخ: {new Date(income.date).toLocaleDateString('ar-DZ')}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}*/


// src/pages/dashboard/student/crud/IncomeList.jsx
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader as DialogHead,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import axiosInstance from '@/utils/provider/axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getProductImage } from '@/utils/provider/getProductImage'; // دالة تعرض صورة المنتج بناءً على اسمه

export  function IncomeList({ budgetId }) {
  const queryClient = useQueryClient();

  // 1) جلب كل Incomes الخاصة بهذا الـ budgetId
  const { data: incomes = [] } = useQuery({
    queryKey: ['incomes', budgetId],
    queryFn: () => axiosInstance.get(`/income/budget/${budgetId}`).then((res) => res.data)
  });

  // 2) حذف Income
  const deleteMutation = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/income/${id}`),
    onSuccess: () => {
      toast.success('تم حذف الدخل');
      queryClient.invalidateQueries(['incomes', budgetId]);
    },
    onError: () => {
      toast.error('فشل في الحذف');
    }
  });

  // 3) تحديث Income
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => axiosInstance.put(`/income/${id}`, data),
    onSuccess: () => {
      toast.success('تم تحديث الدخل');
      queryClient.invalidateQueries(['incomes', budgetId]);
    },
    onError: () => {
      toast.error('فشل في التحديث');
    }
  });

  // لإظهار نافذة التعديل
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    product: '',
    quantite: '',
    unit: '',
    date: new Date()
  });

  const handleEditClick = (income) => {
    setEditData(income);
    setForm({
      product: income.product,
      quantite: income.quantite,
      unit: income.unit,
      date: new Date(income.date)
    
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date }));
  };

  const handleUpdate = async () => {
    await updateMutation.mutateAsync({ id: editData._id, data: { ...form } });
    setEditData(null);
  };

 // if (isLoading) return <p className="text-center mt-6">جاري تحميل البيانات...</p>;
  if (!incomes.length)
    return <p className="text-center text-gray-500 mt-8">لا توجد بيانات دخل بعد.</p>;

  return (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {incomes.map((income) => (
    <Card key={income._id} className="p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all bg-white flex flex-col justify-between">
      
      {/* صورة المنتج + الاسم */}
      <div className="flex items-center gap-4 mb-4">
                  <img
                    src={getProductImage(income.product)}
                    alt={income.product}
                    className="w-16 h-16 rounded-full object-cover border border-green-300"
                  />
            <div className="bg-white  rounded-lg p-4 border border-gray-200">
        <h2 className="text-xl font-semibold text-green-700 mb-3 capitalize">
          {income.product}
        </h2>
      <div className="flex items-center space-x-2 ">
          <span className="text-sm text-gray-600">الكمية:</span>
          <span className="text-lg font-bold text-green-800">
            {income.quantite}
          </span>
          <span className="text-sm text-gray-500">{income.unit}</span>
        </div>
            </div>
                </div>
      {/* التاريخ */}
      <p className="text-sm text-gray-500 mt-auto">
        📅 التاريخ: {new Date(income.date).toLocaleDateString('ar-DZ')}
      </p>

      {/* الأزرار */}
      <div className="flex justify-end gap-3 mt-4">
        {/* زر التعديل */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-sm px-3 py-1 hover:bg-green-100 text-green-700 border-green-300"
              onClick={() => handleEditClick(income)}
            >
              ✏️ تعديل
            </Button>
          </DialogTrigger>

          {editData && editData._id === income._id && (
            <DialogContent>
              <DialogHead>
                <DialogTitle>تعديل الدخل</DialogTitle>
              </DialogHead>
              <div className="space-y-4 mt-4">
                {/* الحقول: المنتج، الكمية، الوحدة، التاريخ */}
                {/* ... كما لديك مسبقًا ... */}
                        <div>
                          <label className="block font-medium mb-1">المنتج</label>
                          <select
                            name="product"
                            value={form.product}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          >
                            <option value="">اختر المنتج</option>
                            {['طماطم', 'جزر', 'بطاطا',"تمر","بطيخ","خوخ","بصل","ثوم"].map((prod) => (
                              <option key={prod} value={prod}>
                                {prod}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* تعديل الكمية */}
                        <div>
                          <label className="block font-medium mb-1">الكمية</label>
                          <input
                            type="number"
                            name="quantite"
                            value={form.quantite}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          />
                        </div>

                        {/* تعديل الوحدة */}
                        <div>
                          <label className="block font-medium mb-1">الوحدة</label>
                          <select
                            name="unit"
                            value={form.unit}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          >
                            <option value="">اختر الوحدة</option>
                            {['هكتار','ار','متر مربع'].map((u) => (
                              <option key={u} value={u}>
                                {u}
                              </option>
                            ))}
                          </select>
                        </div>

{/* تعديل التاريخ */}
                        <div>
                          <label className="block font-medium mb-1">التاريخ</label>


                          <DatePicker
                            selected={form.date}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"

                            className="w-full p-2 border border-gray-300 rounded"
                            required
                          />
                        </div>
                      </div>


              
              <DialogFooter className="pt-4 border-t mt-6">
                <DialogClose asChild>
                  <Button className="bg-green-600 hover:bg-green-700 text-white"
                   onClick={handleUpdate}>
                    💾 حفظ التعديلات
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>

        {/* زر الحذف */}
        <Button
          variant="destructive"
          className="text-sm px-3 py-1"
          onClick={() => deleteMutation.mutate(income._id)}
        >
          🗑️ حذف
        </Button>
      </div>
    </Card>
  ))}
</div>
  );
}