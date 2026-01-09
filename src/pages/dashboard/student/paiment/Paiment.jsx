import React, { useEffect } from 'react';
//import BudgetList from './BudgetList';
import CreateBudgett from './CreateBudgett';


import BudgetsListt from './BudgetListt';
import BudgettsList from './BudgetListt';

const Paiment = () => {

  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* العنوان */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 flex justify-center items-center gap-2">
          📊 لوحة الاحصائيات الانتاجية
        </h2>
        <p className="text-gray-500 mt-2 text-sm">إدارة البيانات حسب الولايات المستهدفة</p>
      </div>

      {/* بطاقة العمليات */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-6 max-w-5xl mx-auto">
        {/* مكون إنشاء ميزانية */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">➕ إضافة ارض  جديدة</h3>
          <CreateBudgett />
        </div>

        {/* قائمة الميزانيات */}
        <div className="border-t pt-4">
          <BudgettsList />
        </div>
      </div>
    </div>
  );
};


export default Paiment;
