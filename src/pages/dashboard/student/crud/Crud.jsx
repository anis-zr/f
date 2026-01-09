/*import React from 'react'
import gsap from "gsap";
import { useEffect, useRef ,useState} from "react";

const Crud = ({farmer}) => {

    
      const [remainingLand, setRemainingLand] = useState(farmer.totalLand - farmer.usedLand);
      const [newCropArea, setNewCropArea] = useState("");
      const cardRef = useRef(null);
    
      useEffect(() => {
        gsap.fromTo(cardRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
      }, [remainingLand]);
    
      const handleAddCrop = () => {
        const area = parseFloat(newCropArea);
        if (!area || area <= 0) {
          alert("يرجى إدخال قيمة صحيحة!");
          return;
        }
        if (area > remainingLand) {
          alert("المساحة غير كافية!");
          return;
        }
    
        setRemainingLand(prev => prev - area);
        setNewCropArea("");
        gsap.to(cardRef.current, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 });
      };
    
      return (
        <div ref={cardRef} className="border p-4 rounded-lg shadow-md bg-white mb-4">
          <h3 className="text-lg font-semibold">{farmer.name} ({farmer.wilaya})</h3>
          <p>🌿 المساحة المتاحة: <strong>{remainingLand} هكتار</strong></p>
    
          <div className="flex gap-2 mt-3">
            <input
              type="number"
              className="p-2 border rounded-md"
              placeholder="المساحة المزروعة"
              value={newCropArea}
              onChange={(e) => setNewCropArea(e.target.value)}
            />
            <button 
              onClick={handleAddCrop}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              + إضافة
            </button>
          </div>
        </div>
      );
    };


export default Crud

*/
import React, { useEffect } from 'react';
//import BudgetList from './BudgetList';
import CreateBudget from './CreateBudget';


import BudgetsList from './BudgetList';

const Crud = () => {
 //const { getBudgets } = useGlobalContext();

//  useEffect(() => {
  //  getBudgets() // جلب البيانات عند تحميل الصفحة
  //}, []);

 return (
  <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
    {/* العنوان */}
    <div className="mb-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 flex justify-center items-center gap-2">
        📊 لوحة ادخال الإحصائيات الزراعية
      </h2>
      <p className="text-gray-500 mt-2 text-sm">إدارة البيانات حسب الولايات المستهدفة</p>
    </div>

    {/* بطاقة العمليات */}
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-6 max-w-5xl mx-auto">
      {/* مكون إنشاء ميزانية */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">➕ إضافة ارض جديدة</h3>
        <CreateBudget />
      </div>

      {/* قائمة الميزانيات */}
      <div className="border-t pt-4">
        <BudgetsList />
      </div>
    </div>
  </div>
);
};

export default Crud;
