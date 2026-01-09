/*import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utils/provider/axios";


const BudgetDetails = () => {
  const { id } = useParams();
   const queryClient = useQueryClient();

  const { mutate: useCreateBudget, isPending } = useMutation({
    mutationFn: async (newBudget) => {
      const res = await axiosInstance.post("/budget/add", newBudget);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['budgets']);
    },
  });

  const units = ['ton', 'quantar'];
  const products = ["tomate", "carrote", "batata"];

  const [showUnits, setShowUnits] = useState(false);
  const [inputState, setInputState] = useState({
    product: "",
    quantite: '',
    date:'',
    unit: ''
  });

  const toggleUnits = () => setShowUnits(!showUnits);

  const handleUnitSelect = (selectedUnit) => {
    setInputState(prev => ({ ...prev, unit: selectedUnit }));
    setShowUnits(false);
  };

  const handleChange = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    useCreateBudget(inputState, {
      onSuccess: () => {
        setInputState({ wilaya: "", quantite: "", unit: "",date:"" });
      }
    });
  };

  // Fetch البيانات بهذا الـ id
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md items-center cursor-pointer hover:shadow-md flex flex-col border-2 border-dashed'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Chart</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>إضافة ميزانية جديدة</DialogTitle>
            <DialogDescription>
              <div className="mt-4">
                <h2 className="text-block font-medium my-1">product</h2>
                <select
                  name="wilaya"
                  value={inputState.products}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">select product</option>
                  {products.map((product, idx) => (
                    <option key={idx} value={product}>{product}</option>
                  ))}
                </select>
              </div>


              <div className="mt-4">
                <h2 className="text-block font-medium my-1">quantite</h2>
                <div style={{ position: 'relative', width: '100%' }}>

                  <input
                    name="quantite"
                    type="number"
                    value={inputState.quantite}
                    onChange={handleChange}
                    placeholder=""
                    style={{
                      width: '100%',
                      paddingRight: '60px',
                      paddingLeft: '10px',
                      height: '40px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '16px'
                    }}
                  />
                  <div
                    onClick={toggleUnits}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      background: '#f5f5f5',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      

fontSize: '14px'
                    }}>
                    {inputState.unit}
                  </div>
                  {showUnits && (
                    <div
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '110%',
                      background: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      zIndex: 5,
                        width: '60px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                      >
                      {units.map((u) => (
                        <div
                        key={u}
                        onClick={() => handleUnitSelect(u)}
                        style={{
                          padding: '6px 8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          background: u === inputState.unit ? '#e0e0e0' : '#fff'
                        }}
                        >
                          {u}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
                  
                           <div className="mt-4">
                                  <h2 className="text-block font-medium my-1">Date</h2>
                                  <div style={{ position: 'relative', width: '100%' }}>
                                    
                                    <input
                                      name="date"
                                      type=""
                                      value={inputState.date}
                                      onChange={handleChange}
                                      placeholder=""
                                      style={{
                                        width: '100%',
                                        paddingRight: '60px',
                                        paddingLeft: '10px',
                                        height: '40px',
                                        borderRadius: '6px',
                                        border: '1px solid #ccc',
                                        fontSize: '16px'
                                      }}
                                    />  </div></div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start mt-4">
            <DialogClose asChild>
              <Button
                disabled={!(inputState.wilaya && inputState.quantite)}
                className="mt-2 w-full"
                onClick={handleSubmit}
              >
                {isPending ? "جاري الإضافة..." : "إضافة الميزانية"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BudgetDetails;*/

/*
// src/pages/dashboard/student/crud/BudgetDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import axiosInstance from '@/utils/provider/axios';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash2, Pencil } from 'lucide-react';

// --- API calls ---
const fetchIncomes = async (budgetId) => {
  const { data } = await axiosInstance.get(`/income/budget/${budgetId}`);
  return data;
};

const createIncome = async (newIncome) => {
  const { data } = await axiosInstance.post('/income', newIncome);
  return data;
};

const updateIncome = async (income) => {
  const { data } = await axiosInstance.put(`/income/${income._id}`, income);
  return data;
};

const deleteIncome = async (id) => {
  await axiosInstance.delete(`/income/${id}`);
};

// --- Main component ---
export default function BudgetDetails() {
  const { id: budgetId } = useParams();
  const queryClient = useQueryClient();

  // 1. جلب الدخلات  
  const { data: incomes = [], isLoading } = useQuery(
    ['incomes', budgetId],
    () => fetchIncomes(budgetId)
  );

  // 2. إضافة دخل جديد
  const createMutation = useMutation(createIncome, {
    onSuccess: () => queryClient.invalidateQueries(['incomes', budgetId])
  });

  // 3. تعديل دخل
  const updateMutation = useMutation(updateIncome, {
    onSuccess: () => queryClient.invalidateQueries(['incomes', budgetId])
  });

  // 4. حذف دخل
  const deleteMutation = useMutation(deleteIncome, {
    onSuccess: () => queryClient.invalidateQueries(['incomes', budgetId])
  });

  // UI state
  const [showUnits, setShowUnits] = useState(false);
  const [dialogMode, setDialogMode] = useState('create'); // 'create' | 'edit'
  const [editIncome, setEditIncome] = useState(null);
  const [form, setForm] = useState({
    product: '',
    quantite: '',
    unit: 'kg',
    date: ''
  });

  // Handlers
  const openCreate = () => {
    setDialogMode('create');
    setForm({ product: '', quantite: '', unit: 'kg', date: '' });
  };
  const openEdit = (inc) => {
    setDialogMode('edit');
    setEditIncome(inc);
    setForm({
      product: inc.product,
      quantite: inc.quantite,
      unit: inc.unit,
      date: inc.date.slice(0, 10)
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dialogMode === 'create') {
      createMutation.mutate({ ...form, budgetId });
    } else {
      updateMutation.mutate({ _id: editIncome._id, ...form });
    }
  };
  const handleDelete = (inc) => {
    deleteMutation.mutate(inc._id);
  };
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//  if (isLoading) return <p>جاري تحميل البيانات…</p>;

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold">تفاصيل الميزانية</h2>

     
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={openCreate}>
            + إضافة دخل
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialogMode === 'create' ? 'إضافة دخل جديد' : 'تعديل الدخل'}
            </DialogTitle>
            <DialogDescription className="space-y-4">
              <div>
                <label>المنتج</label>
                <input
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"


/>
              </div>
              <div>
                <label>الكمية</label>
                <input
                  name="quantite"
                  type="number"
                  value={form.quantite}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>الوحدة</label>
                <select
                  name="unit"
                  value={form.unit}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="kg">kg</option>
                  <option value="ton">ton</option>
              
                </select>
              </div>
              <div>
                <label>التاريخ</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={handleSubmit}
                disabled={
                  createMutation.isLoading || updateMutation.isLoading
                }
              >
                {dialogMode === 'create'
                  ? createMutation.isLoading
                    ? 'جاري الإضافة...'
                    : 'إضافة'
                  : updateMutation.isLoading
                  ? 'جاري التحديث...'
                  : 'تحديث'}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incomes.map((inc) => (
          <Card key={inc._id} className="relative">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {inc.product}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => openEdit(inc)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(inc)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>الكمية: <strong>{inc.quantite} {inc.unit}</strong></p>
              <p>التاريخ: <strong>{new Date(inc.date).toLocaleDateString()}</strong></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}*/


// src/pages/dashboard/student/crud/BudgetDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { CreateIncome } from './Createincome';
import {IncomeList} from './incomelist';

export  function BudgetDetails() {
  const { budgetId } = useParams(); // هذا هو ID الميزانية

 return (
  <div className="p-6 space-y-8 max-w-5xl mx-auto">
    {/* العنوان */}
    <div className="flex items-center justify-between border-b pb-4">
      <h1 className="text-3xl font-bold text-green-700">📊 تفاصيل الاراضي</h1>
      {/* زر إضافة دخل */}
      <CreateIncome budgetId={budgetId} />
    </div>

    {/* قائمة الدخل */}
    <div className="mt-6">
      <IncomeList budgetId={budgetId} />
    </div>
  </div>
);}