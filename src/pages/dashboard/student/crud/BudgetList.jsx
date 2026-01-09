/*import React from 'react'
import CreateBudget from './CreateBudget'


const  BudgetList = () => {
  return (
    <div className='mt-7'>
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> <CreateBudget/>
     </div>
      
    </div>
  )
}

export default BudgetList



// components/BudgetList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import CreateBudget from "./CreateBudget";



  const fetchBudgets = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/incomes");
      setBudgets(res.data); // تحديث القائمة
    } catch (err) {
      console.error("Failed to fetch budgets", err);
    }
  };

  useEffect(() => {
    fetchBudgets(); // تحميل أولي
  }, []);


const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Budgets</h2>

      <div className="grid grid-cols-3 gap-4">
        {budgets.map((budget, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <p><strong>Wilaya:</strong> {budget.name}</p>
            <p><strong>Area:</strong> {budget.totalAmount} {budget.unit}</p>
          </div>
        ))}

        <CreateBudget addIncome={fetchBudgets} />
      </div>
    </div>
  );
};

export default BudgetList;




import { useEffect, useState } from "react";

import CreateBudget from "./CreateBudget";
import BudgetItem from "./BudgetItem";
import { useGlobalContext } from "@/utils/provider/GlobalProvider";

const BudgetList = () => {
  const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

  useEffect(() =>{
      getIncomes()
  }, [])
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Charts — Budgets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     
        <CreateBudget onCreated={addIncome} />

        {incomes.map(b => (
          <BudgetItem key={b._id} incomes={b} />
        ))}
      </div>
    </div>
  );
};

export default BudgetList;


import React, { useEffect } from "react";
import { useGlobalContext } from "@/utils/provider/GlobalProvider";
import { Card } from "@/components/ui/card";

const BudgetList = () => {
  const { incomes, getIncomes } = useGlobalContext();

  useEffect(() => {
    getIncomes(); // جلب البيانات عند فتح الصفحة
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {incomes.length === 0 ? (
        <p className="text-center col-span-3">لا توجد ميزانيات بعد.</p>
      ) : (
        incomes.map((item, index) => (
          <Card key={index} className="p-4 rounded-xl shadow-md bg-white">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600">المنتج: {item.product}</p>
            <p className="text-sm">الكمية: {item.quantite} {item.unit}</p>
            <p className="text-sm text-gray-500">
              التاريخ: {new Date(item.date).toLocaleDateString("ar-DZ")}
            </p>
          </Card>
        ))
      )}
    </div>
  );
};

export default BudgetList;



import React, { useState } from "react";
import { useGlobalContext } from "@/utils/provider/GlobalProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogHeader as DialogHead, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";

const BudgetsList = () => {
  const { budgets, deleteBudget, updateBudget } = useGlobalContext();
  const [editData, setEditData] = useState(null);

  const [form, setForm] = useState({ quantite: '', unit: '',wilaya:'' });

  const handleEditClick = (budget) => {
    setEditData(budget);
    setForm({ quantite: budget.quantite,wilaya:budget.wilaya, unit: budget.unit });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateBudget({ ...editData, ...form });
    setEditData(null);
  };

  if (!budgets.length) {
    return <p className="text-center text-gray-500 mt-8">لا توجد ميزانيات بعد.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {budgets.map((budget) => (
        <Card key={budget._id} className="relative">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {budget.wilaya}
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => handleEditClick(budget)}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHead>
                      <DialogTitle>تعديل الميزانية</DialogTitle>
                    </DialogHead>
                    <div className="space-y-4">
                      <div>
                        <label>المساحة:</label>
                        <input
                          type="number"
                          name="quantite"
                          value={form.quantite}
                          onChange={handleChange}
                          className="w-full border p-2 rounded"
                        />
                      </div>
                      <div>
                        <label>الوحدة:</label>
                        <select
                          name="unit"
                          value={form.unit}
                          onChange={handleChange}
                          className="w-full border p-2 rounded"
                        >
                          <option value="ha">ha</option>
                          <option value="km2">km2</option>
                          <option value="m2">m2</option>
                        </select>
                      </div>
                    </div>
                    <DialogFooter className="mt-4">
                      <DialogClose asChild>
                        <Button onClick={handleUpdate}>تحديث</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteBudget(budget._id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">المساحة الكلية: <strong>{budget.quantite} {budget.unit}</strong></p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BudgetsList;



import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader as DialogHead,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";
import axiosInstance from "@/utils/provider/axios";

const fetchBudgets = async () => {
  const res = await axiosInstance.get("/budget/get");
  return res.data;
};

const BudgetsList = () => {
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({ quantite: "", unit: "", wilaya: "" });

  const queryClient = useQueryClient();

  const { data: budgets = [], isLoading } = useQuery({
    queryKey: ["budgets"],
    queryFn: fetchBudgets,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axiosInstance.delete(`/budget/${id}`);
    },
    onSuccess: () => {
      toast.success("تم حذف الميزانية");
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
    onError: () => {
      toast.error("فشل في الحذف");
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (updated) => {
      await axiosInstance.put(`/budget/${updated._id}`, updated);
    },
    onSuccess: () => {
      toast.success("تم تحديث الميزانية");
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
    onError: () => {
      toast.error("فشل في التحديث");
    },
  });

  const handleEditClick = (budget) => {
    setEditData(budget);
    setForm({ quantite: budget.quantite, unit: budget.unit, wilaya: budget.wilaya });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateMutation.mutateAsync({ ...editData, ...form });
    setEditData(null);
  };

  if (isLoading) return <p className="text-center">جاري تحميل الميزانيات...</p>;

  if (!budgets.length) {
    return <p className="text-center text-gray-500 mt-8">لا توجد ميزانيات بعد.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {budgets.map((budget) => (
        <Card key={budget._id} className="relative">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {budget.wilaya}
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEditClick(budget)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHead>
                      <DialogTitle>تعديل الميزانية</DialogTitle>
                    </DialogHead>
                    <div className="space-y-4">
                      <div>
                        <label>المساحة:</label>
                        <input
                          type="number"
                          name="quantite"
                          value={form.quantite}
                          onChange={handleChange}
                          className="w-full border p-2 rounded"
                        />
                      </div>
                      <div>
                        <label>الوحدة:</label>
                        <select
                          name="unit"
                          value={form.unit}
                          onChange={handleChange}
                          className="w-full border p-2 rounded"


>
                          <option value="ha">ha</option>
                          <option value="km2">km2</option>
                          <option value="m2">m2</option>
                        </select>
                      </div>
                    </div>
                    <DialogFooter className="mt-4">
                      <DialogClose asChild>
                        <Button onClick={handleUpdate}>تحديث</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteMutation.mutate(budget._id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              المساحة الكلية: <strong>{budget.quantite} {budget.unit}</strong>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BudgetsList;


*/

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader as DialogHead,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";

import { useNavigate } from "react-router-dom";
import axiosInstance from "@/utils/provider/axios";

const fetchBudgets = async () => {
  const res = await axiosInstance.get("/budget/get");
  return res.data;
};

const BudgetsList = () => {
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({ quantite: "", unit: "", wilaya: "" });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: budgets = [], isLoading } = useQuery({
    queryKey: ["budgets"],
    queryFn: fetchBudgets,
  });

  // ✅ deleteMutation بعد تصحيح المسار
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axiosInstance.delete(`/budget/delete/${id}`); // ✅ استخدم backticks
    },
    onSuccess: () => {
      toast.success("تم حذف الميزانية");
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
    onError: () => {
      toast.error("فشل في الحذف");
    },
  });

  // ✅ updateMutation بعد تصحيح المسار
  const updateMutation = useMutation({
    mutationFn: async (updatedBudget) => {
      const { _id, ...data } = updatedBudget;
      await axiosInstance.put(`/budget/update/${_id}`, data); // ✅ استخدم backticks و _id
    },
    onSuccess: () => {
      toast.success("تم تحديث الميزانية");
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
    onError: () => {
      toast.error("فشل في التحديث");
    },
  });

  const handleEditClick = (budget) => {
    setEditData(budget);
    setForm({
      quantite: budget.quantite,
      unit: budget.unit,
      wilaya: budget.wilaya,
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!editData?._id) return toast.error("لا يوجد معرف للميزانية");
    await updateMutation.mutateAsync({ _id: editData._id, ...form });
    setEditData(null);
  };

  const handleCardClick = (budgetId) => {
    navigate(`/dashboard/budget/${budgetId}`);
  };
 // if (isLoading) return <p className="text-center">جاري تحميل الميزانيات...</p>;
  if (!budgets.length) return <p className="text-center text-gray-500 mt-8">لا توجد ميزانيات بعد.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {budgets.map((budget) => (
    <Card
      key={budget._id}
      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative"
      onClick={() => handleCardClick(budget._id)}
    >
      <div className="p-4 space-y-4">

        {/* رأس البطاقة */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📍</div>
            <div className="font-semibold text-lg text-green-700">{budget.wilaya}</div>
          </div>

          {/* أزرار التعديل والحذف */}
          <div
            className="flex gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زر التعديل */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEditClick(budget)}
                  className="hover:bg-green-100"
                >
                  <Pencil className="w-5 h-5 text-green-600" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHead>
                  <DialogTitle>تعديل الميزانية</DialogTitle>
                </DialogHead>
                <div className="space-y-4 mt-4">
                  <div>
                    <label className="block mb-1">المساحة</label>
                    <input
                      type="number"
                      name="quantite"
                      value={form.quantite}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">الوحدة</label>
                    <select
                      name="unit"
                      value={form.unit}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    >
                      <option value="هكتار"> هكتار</option>
                      <option value="ار"> ار</option>
                      <option value="متر مربع"> متر مربع</option>
                    </select>
                  </div>
                </div>
                <DialogFooter className="pt-4 border-t mt-6">
                  <DialogClose asChild>
                    <Button className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleUpdate}
                    >
                      💾 حفظ التعديلات
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* زر الحذف */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteMutation.mutate(budget._id)}
              className="hover:bg-red-100"
            >
              <Trash2 className="w-5 h-5 text-red-600" />
            </Button>
          </div>
        </div>

        {/* محتوى الميزانية */}
        <div className="text-sm text-gray-700 flex justify-between items-center border-t pt-3">
          <span>📐 المساحة الكلية:</span>
          <span className="font-semibold text-gray-900">
            {budget.quantite} <span className="text-xs text-gray-600">{budget.unit}</span>
          </span>
        </div>

      </div>
    </Card>
  ))}
</div>
  );
};

export default BudgetsList;