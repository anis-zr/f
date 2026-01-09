import React from 'react'
import { CustomPieChart } from './CustomPieChart';

   
export const FinanceOverview1 = (totaltebessa,totalsouk_ahras,totalkhanshla) => {
  const  constData=[
    {name:"TEBESSA", quantite:122  },
    {name:"SOUK_AHRAS", quantite:2323},
    {name:"KHANSHELA", quantite:432432}
];
  return (
    <div className=''>
        <div className='flex items-center justify-between'>
    <h5 className='text-lg'>Financial Overwiew</h5> 

    </div>
    <div className='flex flex-wrap justify-center   '>
<div className='flex flex-wrap justify-center   w-full'>
    <CustomPieChart
 data= {constData}
 // label= "TOTAL"
  label= "Tebessa"
 quantite={`$${totaltebessa}`}
  colors={["#875CF5","#FA2C37","##FF6900"]}
 
  

/>
</div>

      </div></div>

  )
}



   
export const FinanceOverview2 = (totaltebessa,totalsouk_ahras,totalkhanshla) => {
  const  constData=[
    {name:"TEBESSA", quantite:122  },
    {name:"SOUK_AHRAS", quantite:2323},
    {name:"KHANSHELA", quantite:432432}
];
  return (
    <div className=''>
        <div className='flex items-center justify-between'>
    <h5 className='text-lg'>Financial Overwiew</h5> 

    </div>
    <div className='flex flex-wrap justify-center   '>
<div className='flex flex-wrap justify-center   w-full'>
    <CustomPieChart
 data= {constData}
 // label= "TOTAL"
  label= "Tebessa"
 quantite={`$${totaltebessa}`}
  colors={["#875CF5","#FA2C37","##FF6900"]}
 
  

/>
</div>

      </div></div>

  )
}





