import React from 'react'
import Video from '../../../assets/m.mp4'
import { Link } from 'react-router-dom';

  
 const Hero = () =>{
     return ( <div className="relative min-h-screen">
   {/* فيديو كخلفية */} <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" > 
    <source src={Video}  /> </video>
     {/* التعتيم على الفيديو */} <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> 
     {/* المحتوى فوق الفيديو */} <div className="relative z-10 flex flex-col justify-center items-start min-h-screen p-11 text-white">
       <p className="md:text-4xl text-2xl">منصتنا ترحب بكم</p>
      <h1 className="md:text-7xl text-4xl text-green-300 font-bold">AGRITECH</h1>
      <p className='md:text-3xl'>منصة تعاونية تجمعنا لنهوظ بالفلاحة وتطورها</p>
       <div className="mt-4 flex gap-4">
         <button className="px-6 py-2  rounded-lg border hover:bg-green-600  font-bold uppercase text-white "><Link to= '/login' >ابدا الان</Link></button> 
         <button className="px-6 py-2  rounded-lg border  hover:bg-green-600 font-bold uppercase  border-white ">تفحص</button> </div>
          </div> </div> ); }
          

          export default Hero; 
