
// src/pages/dashboard/student/crud/CreateIncome.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/utils/provider/axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export  function CreateIncome({ budgetId }) {
  const queryClient = useQueryClient();

  // ✏️ استخدم الـ isLoading وأسميه isCreating لأجل توضيح العملية
  const { mutate: createIncome, isLoading: isCreating } = useMutation({
    mutationFn: async (newIncome) => {
      // ينشئ دخل مرتبطً بالـ budgetId
      const res = await axiosInstance.post('/income/add', newIncome);
      return res.data;
    },
    onSuccess: () => {
      // بعد الإضافة نعيد جلب بيانات "Incomes" الخاصة بهذا الـ budget
      queryClient.invalidateQueries(['incomes', budgetId]);
    }
  });

  // قائمة المنتجات (tomate، carrote، batata مثلاً)
  const products = ['طماطم', 'جزر','قمح', 'بطاطا',"تمر","بطيخ","خوخ","بصل","ثوم"];
  const units = ['هكتار','ار','متر مربع']

  const [showUnits, setShowUnits] = useState(false);
  const [inputState, setInputState] = useState({
    product: '',
    quantite: '',
    unit: '',
    date: new Date()
  });

  const toggleUnits = () => setShowUnits(!showUnits);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setInputState((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      budgetId,
      product: inputState.product,
      quantite: Number(inputState.quantite),
      unit: inputState.unit,
      date: inputState.date
    };

    createIncome(payload, {
      onSuccess: () => {
        // إعادة ضبط الحقول بعد الإضافة
        setInputState({ product: '', quantite: '', unit: '', date: new Date() });
      }
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-slate-100 p-6 rounded-lg cursor-pointer hover:shadow-md flex flex-col items-center justify-center border-2 border-dashed">
            <h2 className="text-3xl">+</h2>
            <p>إضافة مُنتَج جديد</p>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>إضافة دخل جديد </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                {/* اختيار المنتج */}
                <div>
                  <label className="block font-medium mb-1">المنتج</label>
                  <select
                    name="product"
                    value={inputState.product}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">اختر المنتج</option>
                    {products.map((prod) => (
                      <option key={prod} value={prod}>
                        {prod}
                      </option>
                    ))}
                  </select>
                </div>

                {/* الكمية */}
                <div>
                  <label className="block font-medium mb-1">الكمية</label>
                  <input
                    type="number"
                    name="quantite"
                    value={inputState.quantite}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="أدخل الكمية"
                    required
                  />
                </div>

{/* الوحدة */}
                <div className="relative">
                  <label className="block font-medium mb-1">الوحدة</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="unit"
                      value={inputState.unit}
                      readOnly
                      placeholder="اختر الوحدة"
                      className="w-full p-2 border border-gray-300 rounded pr-12 cursor-pointer"
                      onClick={toggleUnits}
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={toggleUnits}
                    >
                      ▾
                    </div>
                  </div>
                  {showUnits && (
                    <div className="absolute right-0 top-full mt-1 w-24 bg-white border border-gray-300 rounded shadow-lg z-10">
                      {units.map((u) => (
                        <div
                          key={u}
                          onClick={() => {
                            setInputState((prev) => ({ ...prev, unit: u }));
                            setShowUnits(false);
                          }}
                          className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                            inputState.unit === u ? 'bg-gray-200' : ''
                          }`}
                        >
                          {u}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* التاريخ */}
                <div>
                  <label className="block font-medium mb-1">التاريخ</label>
                  <DatePicker
                    selected={inputState.date}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition ${
                    isCreating ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isCreating}
                >
                  {isCreating ? 'جاري الإضافة...' : 'إضافة الدخل'}
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <button className="text-red-500 hover:underline">إلغاء</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}