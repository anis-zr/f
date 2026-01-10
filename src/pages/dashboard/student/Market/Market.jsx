/*
import { API_PATHS } from "@/utils/provider/apiPath";


import React, { useEffect, useState } from "react";


import { addThounsandsSeparator } from "../../../../utils/provider/heiper"

import { useNavigate } from "react-router-dom";
import InfoCard from "./infoCard";
import { FinanceOverview1, FinanceOverview2 } from "./FinanceOverview";

import BarChartComponent from "./IncomOverView";
import axiosInstance from "@/utils/provider/axios";


const Market= () =>{





const navigate =  useNavigate();



const [dashboardData, setDashboardData] = useState({totaltebessa:0,totalkhanshla:0,totalsouk_ahras:0});

const [loading, setLoading] = useState(false);


const fetchDashboardData = async() => {

if (loading) return;

setLoading(true);

try {

const response= await axiosInstance.get( `${API_PATHS.DASHBOARD.GET_DATA}`)




if (response.data) { 
  setDashboardData(response.data);
}
} catch (error){

console.log( "Something went wrong. try again",error)
} finally{
  setLoading(false)
};
useEffect(()=>{
  fetchDashboardData()
  return()=>{}
},[])
}
return(
  <div className="p-6 bg-gray-50  min-h-screen">
    <div className="grid flex-cols-1 md:grid-cols-3 gap-6 mb-8"> 
      <InfoCard
      
      label= "Tebessa"
      value={addThounsandsSeparator(dashboardData?.totaltebessa || 0)}
      
      
      />
       <InfoCard
      label= "Khanshla"
  
      value={addThounsandsSeparator(dashboardData?.totalkhanshla || 0)}
      
      />
       <InfoCard
      label= "Souk_ahras"
      value={addThounsandsSeparator(dashboardData?.totalsouk_ahras || 0)}
      
      
      />
      <FinanceOverview1
      totaltebessa={dashboardData?.totaltebessa||0}
      totalsouk_ahras={dashboardData?.totalsouk_ahras||0}
      totalkhanshla={dashboardData?.totalkhanshla||0}
      
      />
            <FinanceOverview2
      totaltebessa={dashboardData?.totaltebessa||0}
      totalsouk_ahras={dashboardData?.totalsouk_ahras||0}
      totalkhanshla={dashboardData?.totalkhanshla||0}
      
      />


<BarChartComponent></BarChartComponent>
      </div> 
    
    </div>
)

}
export default Market;*/




/* src/pages/dashboard/student/MainDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoCard from './infoCard';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/provider/axios';

const STATES = ['Tebessa', 'Souk_Ahras', 'Khanshla'];

export default function Market() {
  const navigate = useNavigate();

  // جلب إجمالي الكمية لكل ولاية
  const { data: totals = {} } = useQuery(
    ['totals'],
    async () => {
      const { data } = await axiosInstance.get('/stats/wilayas');
      // data = { Tebessa: 450, Souk_Ahras: 320, Khanshla: 210 }
      return data;
    },
    { refetchInterval: 5000 }
  );

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">صفحة الفلاح الرئيسية</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATES.map((st) => (
          <InfoCard
            key={st}
            label={st}
            quantite={totals[st] ?? 0}
            onClick={() => navigate(`/dashboard/state/${st}`)}
          />
        ))}
      </div>
    </div>
  );
}
*/
// src/pages/dashboard/student/MainDashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
//import InfoCard from './InfoCard';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/provider/axios';
import CustomPieChart from './CustomPieChart';





//import WilayaPieChart, { CustomPieChart } from './CustomPieChart';

const STATES = ["تبسة", "سوق اهراس", "خنشلة"];

export default function MainDashboard() {
  const navigate = useNavigate();
  // ✅ جلب مجموع الكميات لكل ولاية
  const { data: totals , isLoading, isError } = useQuery(
    ['totals'],
    async () => {
      const { data } = await axiosInstance.get('/stats/wilayas');
      return data; // مثال: { Tebessa: 100, Souk_Ahras: 80, Khanshla: 70 }
    },
    { enabled:true, refetchInterval: 5000 } // ⏱️ polling كل 5 ثواني
  );
  const { data: totalss  , isLoadingg, isErrorr} = useQuery(
    ['totalss'],
    async () => {
      const { data } = await axiosInstance.get('/statss/wilayas');
      return data; // مثال: { Tebessa: 100, Souk_Ahras: 80, Khanshla: 70 }
    },
    { enabled:true,
      refetchInterval: 5000 } // ⏱️ polling كل 5 ثواني
  );
  

  if (isLoading) return <p className="text-center mt-10">...جاري تحميل الكميات</p>;
  if (isError) return <p className="text-center text-red-500">حدث خطأ أثناء جلب البيانات</p>;
  if (isLoadingg) return <p className="text-center mt-10">...جاري تحميل الكميات</p>;
  if (isErrorr) return <p className="text-center text-red-500">حدث خطأ أثناء جلب البيانات</p>;

 return (
  <div className="space-y-8 p-6">
    <h1 className="text-3xl font-bold text-green-700 text-center">
      📊 لوحة تحكم الإنتاج حسب الولايات
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {STATES.map((wilaya) => (
        <div
          key={wilaya}
          className="cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => navigate(`/dashboard/state/${wilaya}`)}
        >
          <div className="bg-white shadow-md rounded-xl p-5 border border-green-100">
            <h2 className="text-xl font-semibold text-green-800 mb-2">{wilaya}</h2>
            <p className="text-gray-600 text-lg">
              الكمية:{" "}
              <span className="font-bold text-green-600">
                {totals[wilaya] || 0} هكتار
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
    {!isLoadingg && (
  <div className="mt-8">
    <CustomPieChart data={totals}
 
    />
  </div>
)}

        <h1 className="text-3xl font-bold text-green-700 text-center">
      📊 لوحة تحكم الإنتاج حسب الولايات
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {STATES.map((wilaya) => (
        <div
          key={wilaya}
          className="cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => navigate(`/dashboard/statee/${wilaya}`)}
        >
          <div className="bg-white shadow-md rounded-xl p-5 border border-green-100">
            <h2 className="text-xl font-semibold text-green-800 mb-2">{wilaya}</h2>
            <p className="text-gray-600 text-lg">
              الكمية:{" "}
              <span className="font-bold text-green-600">
                {totalss[wilaya] || 0} ton
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>


{!isLoadingg && (
  <div className="mt-8">
       <CustomPieChart data={totalss}
     />
  </div>
)}
  </div>

  
);}