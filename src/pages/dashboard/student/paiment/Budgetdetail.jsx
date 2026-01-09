
// src/pages/dashboard/student/crud/BudgetDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { CreateExpense } from './CreateExpense';
import { ExpenseList } from './ExpenseList';


export  function BudgetDetail() {
  const { budgettId } = useParams(); // هذا هو ID الميزانية

 return (
  <div className="p-6 space-y-8 max-w-5xl mx-auto">
    {/* العنوان */}
    <div className="flex items-center justify-between border-b pb-4">
      <h1 className="text-3xl font-bold text-green-700">📊تفاصيل الاراضي</h1>
      {/* زر إضافة دخل */}
      <CreateExpense budgettId={budgettId} />
    </div>

    {/* قائمة الدخل */}
    <div className="mt-6">
      <ExpenseList budgettId={budgettId} />
    </div>
  </div>
);}