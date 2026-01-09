
// src/pages/dashboard/student/crud/ExpenseList.jsx
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
import { getProductImage } from '@/utils/provider/getProductImage';

export function ExpenseList({ budgettId }) {
  const queryClient = useQueryClient();

  // 1) جلب المصاريف
  const { data: expenses = [] } = useQuery({
    queryKey: ['expenses', budgettId],
    queryFn: () => axiosInstance.get(`/expense/budgett/${budgettId}`).then((res) => res.data)
  });

  // 2) حذف مصروف
  const deleteMutation = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/expense/${id}`),
    onSuccess: () => {
      toast.success('تم حذف المصروف');
      queryClient.invalidateQueries(['expenses', budgettId]);
    },
    onError: () => {
      toast.error('فشل في الحذف');
    }
  });

  // 3) تعديل مصروف
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => axiosInstance.put(`/expense/${id}`, data),
    onSuccess: () => {
      toast.success('تم تحديث المصروف');
      queryClient.invalidateQueries(['expenses', budgettId]);
    },
    onError: () => {
      toast.error('فشل في التحديث');
    }
  });

  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    product: '',
    quantite: '',
    unit: '',
    date: new Date()
  });

  const handleEditClick = (expense) => {
    setEditData(expense);
    setForm({
      product: expense.product,
      quantite: expense.quantite,
      unit: expense.unit,
      date: new Date(expense.date)
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

  if (!expenses.length) {
    return <p className="text-center text-gray-500 mt-8">لا توجد بيانات مصاريف بعد.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {expenses.map((expense) => (
        <Card
          key={expense._id}
          className="p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all bg-white flex flex-col justify-between"
        >
          {/* صورة المنتج + الاسم */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={getProductImage(expense.product)}
              alt={expense.product}
              className="w-16 h-16 rounded-full object-cover border border-green-300"
            />
      <div className="bg-white  rounded-lg p-4 border border-gray-200">
  <h2 className="text-xl font-semibold text-green-700 mb-3 capitalize">
    {expense.product}
  </h2>
<div className="flex items-center space-x-2 ">
    <span className="text-sm text-gray-600">الكمية:</span>
    <span className="text-lg font-bold text-green-800">
      {expense.quantite}
    </span>
    <span className="text-sm text-gray-500">{expense.unit}</span>
  </div>
      </div>
          </div>

          {/* التاريخ */}
          <p className="text-sm text-gray-500 mt-auto">
            📅 التاريخ: {new Date(expense.date).toLocaleDateString('ar-DZ')}
          </p>

          {/* أزرار التعديل والحذف */}
          <div className="flex justify-end gap-3 mt-4">

{/* تعديل */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-3 py-1 hover:bg-green-100 text-green-700 border-green-300"
                  onClick={() => handleEditClick(expense)}
                >
                  ✏️ تعديل
                </Button>
              </DialogTrigger>
              {editData && editData._id === expense._id && (
                <DialogContent>
                  <DialogHead>
                    <DialogTitle>تعديل المنتج</DialogTitle>
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
                          <option key={prod} value={prod}>{prod}</option>
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
                        {['Ton', 'Qantar'].map((u) => (
                          <option key={u} value={u}>{u}</option>
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
                  <DialogFooter className="pt-4 border-t mt-6">
                    <DialogClose asChild>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        💾 حفظ التعديلات
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              )}
            </Dialog>

            {/* حذف */}
            <Button
              variant="destructive"
              className="text-sm px-3 py-1"
              onClick={() => deleteMutation.mutate(expense._id)}
            >
              🗑 حذف
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}