
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
import { useNavigate } from "react-router-dom";

const fetchBudgets = async () => {
  const res = await axiosInstance.get("/budgett/get");
  return res.data;
};

const BudgettsList = () => {
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({ quantite: "", unit: "", wilaya: "" });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: budgetts = [], isLoading } = useQuery({
    queryKey: ["budgetts"],
    queryFn: fetchBudgets,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axiosInstance.delete(`/budgett/deletee/${id}`);
    },
    onSuccess: () => {
      toast.success("تم حذف الميزانية");
      queryClient.invalidateQueries({ queryKey: ["budgetts"] });
    },
    onError: () => {
      toast.error("فشل في الحذف");
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (updated) => {
      await axiosInstance.put(`/budgett/updatee/${updated._id}`, updated);
    },
    onSuccess: () => {
      toast.success("تم تحديث الميزانية");
      queryClient.invalidateQueries({ queryKey: ["budgetts"] });
    },
    onError: () => {
      toast.error("فشل في التحديث");
    },
  });

  const handleEditClick = (budgett) => {
    setEditData(budgett);
    setForm({ quantite: budgett.quantite, unit: budgett.unit, wilaya: budgett.wilaya });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateMutation.mutateAsync({ _id:editData._id, ...form });
    setEditData(null);
  };

  const handleCardClick = (budgettId) => {
    navigate(`/dashboard/budgett/${budgettId}`);
  };

 // if (isLoading) return <p className="text-center">جاري تحميل الميزانيات...</p>;
  if (!budgetts.length) return <p className="text-center text-gray-500 mt-8">لا توجد ميزانيات بعد.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {budgetts.map((budgett) => (
    <Card
      key={budgett._id}
      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative"
      onClick={() => handleCardClick(budgett._id)}
    >
      <div className="p-4 space-y-4">

        {/* رأس البطاقة */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📍</div>
            <div className="font-semibold text-lg text-green-700">{budgett.wilaya}</div>
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
                  onClick={() => handleEditClick(budgett)}
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
                      <option value="طن">طن </option>
                      <option value="قنطار">قنطار </option>
                    
                    </select>
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
            </Dialog>

            {/* زر الحذف */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteMutation.mutate(budgett._id)}
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
            {budgett.quantite} <span className="text-xs text-gray-600">{budgett.unit}</span>
          </span>
        </div>

      </div>
    </Card>
  ))}
</div>
  );
};

export default BudgettsList;