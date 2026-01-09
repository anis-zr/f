 /*import React, { useState } from 'react'
import { useAuth } from '../utils/provider/AuthProvider'
import {BiHomeAlt}  from 'react-icons/bi'
import { FaHome, FaSeedling, FaChartBar, FaUserCheck, FaSignOutAlt } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Swal from 'sweetalert2'
import Scroll from '../hooks/useScroll';
import { HashLoader } from 'react-spinners';
const DashboardLayout = () => {
  const [ open,setOpen ] = useState(true)
  const {loader, logout} = useState('')
 
  const [active, setActive] = useState("home");
  const pageRef = useRef(null);
  
 //const {currentUser }= useState(false)
  //const role = currentUser?.role
  const adminNavItems = [
    { name: "الرئيسية", path: "/", icon: <FaHome /> },
    { name: "إضافة منتج زراعي", path: "/student", icon: <FaSeedling /> },
    { name: "إحصائيات الإنتاج", path: "/dashboard/", icon: <FaChartBar /> },
    { name: "طلبات المزارعين", path: "/market", icon: <FaUserCheck /> },
    { name: "Fiche tech", path: "/fiche", icon: <FaUserCheck /> },
    { name: "خروج", path: "/logout", icon: <FaSignOutAlt />, isLogout: true },
  ];
  const agri= [
    { to: "/",  icon: <FaHome />, label:"Home"},
    {to: "/dashboard/crud" , icon: <FaSeedling /> ,label:"crud"},
    { to: "/dashboard/paiment",  icon: <FaChartBar />, label:"paiment" },
   
    { to: "/dashboard/market", icon: <FaUserCheck /> , label:"market"},
    { path: "/", icon: <FaSignOutAlt />, isLogout: true, label:"logout" }
  ]
  const navigate = useNavigate();
  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.8, rotate: -5 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" }
    );
  }, []);
  if(loader){
    return <div className='flex justify-center items-center h-screen'><HashLoader color='#FF1949' size={50}/></div>
  }
  function handlelogOut(){

 Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Log out me!"
}).then((result) => {
  if (result.isConfirmed) {
   
    
    (Swal.fire({
      title: "Logged out!",
      text: "Your file has been deleted.",
      icon: "success"
    })).catch((error)=>console.log(error), )
    
  }
  else navigate('/dashboard');
 
},navigate('/') ) };
if(loader){
  return <div className='flex justify-center items-center h-screen'>
    <HashLoader color="rgba(102, 199, 102, 1)" /></div>
}
  
  
const role= "agriculteur";

  return (
  <div className='flex'>
   <div ref = {pageRef} className={`${open?"w-52 overflow-y-auto ":"w-[77px] overflow-auto " }  bg-gray-900 shadow-lg  text-white p-5 h-screen md:block hidden  relative duration-300 `}>
  
    <div className='flex gap-x-4 items-center '>
    <img src="/react.svg" onClick={ ()=>setOpen (!open )} alt="" className={`cursor-pointer h-{40px} duration-500 ${open && 'rotate-[360deg]'}`} />
   
   <Link to='/'> <h1 
    className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200  ${!open && 'scale-0'}`
  
  }>
      Anis hello 
    </h1></Link>
    </div> 
   
     <div className=" bg-gray-900 text-white flex flex-col pt-8">
     { role ==="minister" &&(
     <ul className="space-y-4">
     <p className={`ml-3 uppercase text-gray-500 ${!open && "hidden "}`}> <small>Menu </small> </p>
     
     {adminNavItems.map((menuItem, index) => (
          <li
          
            key={index} 
            onClick={() => {
              if (menuItem.isLogout) {
                // تنفيذ عملية تسجيل الخروج (مثلاً إزالة التوكن)
     //      navigate("/")
           handlelogOut()
              } else {
                navigate(menuItem.path);
              
              }
            }}
            className={`flex gap-x-4 items-center duration-150 space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
              menuItem.isLogout ? "hover:bg-red-600" : ""
            } `} 
          >
            {menuItem.icon}
            <span className={`${!open && "hidden" } origin-left duration-200`}>{menuItem.name}</span>
           </li>
        
      
     )
     )
         }
       
     </ul>
    )} 

{ role ==="agriculteur" &&(
     <ul className="space-y-4">
     <p className={`ml-3 uppercase text-gray-500 ${!open && "hidden "}`}> <small>Menu </small> </p>
     
     {agri.map((menuItem, index) => (
          <li
          
            key={index} 
            onClick={() => {
              if (menuItem.isLogout) {
                // تنفيذ عملية تسجيل الخروج (مثلاً إزالة التوكن)
     //      navigate("/")
           handlelogOut()
              } else {
                navigate(menuItem.label);
              
              }
            }}
            className={`flex gap-x-4 items-center duration-150 space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${
              menuItem.isLogout ? "hover:bg-red-600" : ""
            } `} 
          >
            {menuItem.icon}
            <span className={`${!open && "hidden" } origin-left duration-200`}>{menuItem.label}</span>
           </li>
        
      
     )
     )
         }
       
     </ul>
    )} 
   </div>
    
 
    <ul>
    <p className={`ml-3 text-gray-500 ${!open && "hidden "}`}> <small>UseFull </small> </p>
    </ul>
    <div>
  
    </div>
   
    </div>
  <div>
    <Scroll/>
    <Outlet/></div>
    </div>

    
  )
}

export default DashboardLayout

/*import { NavLink} from 'react-router-dom'
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { FaHome, FaSeedling, FaChartBar, FaUserCheck, FaSignOutAlt, FaUser } from "react-icons/fa";


import { useAuth } from '../utils/provider/AuthProvider';


const DashboardLayout = () => {

  const [ open,setOpen ] = useState(true)
const  {loader,logout}= useAuth()
  const adminNavItems = [
    {to :"/dashboard/admin-home ", icon :< FaHome className='text-2xl '/> , label :"Home "},
    {to :"/dashboard/admin-class ", icon :< FaSeedling className='text-2xl '/> , label :"ssss "},
    {to :"/dashboard/admin-x", icon :< FaChartBar className='text-2xl '/> , label :"user "},
    {to :"/dashboard/admin-y ", icon :< FaSignOutAlt className='text-2xl '/> , label :"Home "}
  ]
 
if(loader){
  return <div>loading ... </div>
}
return (
  <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-5">
    
      <div className='flex gap-x-4 items-center '>
  <img src="/react.svg" onClick={ ()=>setOpen (!open )} alt="" className={`cursor-pointer h-{40px} duration-500 ${open && 'rotate-[360deg]'}`} />
  <h1 className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200  ${!open && 'scale-0'}`}>

    Anis hello 
  </h1>
  </div>
  
)
}


export default DashboardLayout;















    <div ref={pageRef} className={`h-screen bg-gray-900 text-white p-5 ${open ? 'w-52' : 'w-20'} duration-300`}>
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        <img src="/react.svg" className={`h-10 ${open && 'rotate-180 transition'}`} alt="toggle" />
      </div>
      <h1 className={`font-bold text-xl mt-4 ${!open && 'hidden'}`}>Welcome, {role}</h1>

      <ul className="mt-6 space-y-2">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-700 ${item.isLogout ? "hover:bg-red-600" : ""}`}
            onClick={() => item.isLogout ? handleLogout() : navigate(item.label)}
          >
            <span>{item.icon}</span>
            <span className={`${!open && 'hidden'}`}>{item.name}</span>
          </li>
        ))}
      </ul>
      <div>
        <Scroll/>
       <Outlet/></div>
    </div>








import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Swal from 'sweetalert2';
import { useAuth } from '../utils/provider/AuthProvider';

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const { user, logout, loading } = useAuth();
  const [active, setActive] = useState("home");

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.8, rotate: -5 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1 }
    );
  }, []);

  if (loading) {
    return <div className="text-center p-10">🔄 جاري تحميل المستخدم...</div>;
  }

  if (!user) {
    return <div className="text-red-500 p-10">❌ لا يمكن تحديد الدور. تأكد من تسجيل الدخول.</div>;
  }

  const role = user.role;

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Log out me!"
    }).then(result => {
      if (result.isConfirmed) {
        logout();
        Swal.fire("Logged out!", "", "success");
        navigate('/');
      }
    });
  };

  const adminNavItems = [
    { name: "الرئيسية", path: "/", icon: "🏠" },
    { name: "طلبات", path: "/market", icon: "📬" },
    { name: "خروج", isLogout: true, icon: "🚪" }
  ];

  const agri = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "CRUD", path: "/crud", icon: "✏️" },
    { name: "Paiments", path: "/dashboard/paiment", icon: "💰" },
    { name: "طلبات", path: "/market", icon: "📬" },
    { name: "Logout", isLogout: true, icon: "🚪" }
  ];

  const navItems = role === 'minister' ? adminNavItems : agri;

  return (
    <div className='flex'>
      <div ref={pageRef} className={`${open ? "w-52" : "w-[77px]"} bg-gray-900 shadow-lg text-white p-5 h-screen md:block hidden relative duration-300`}>
        <div className='flex gap-x-4 items-center'>
          <img
            src="/react.svg"
            onClick={() => setOpen(!open)}
            alt=""
            className={`cursor-pointer h-[40px] duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <Link to='/'>
            <h1 className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open && 'scale-0'}`}>
              Anis hello
            </h1>
          </Link>
        </div>

        <div className="bg-gray-900 text-white flex flex-col pt-8">
          <ul className="space-y-4">
            <p className={`ml-3 uppercase text-gray-500 ${!open && "hidden"}`}>
              <small>Menu</small>
            </p>
            {navItems.map((menuItem, index) => (
              <li
                key={index}
                onClick={() => {
                  if (menuItem.isLogout) {
                    handleLogout();
                  } else {
                    navigate(menuItem.path);
                  }
                }}
                className={`flex gap-x-4 items-center duration-150 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${menuItem.isLogout ? "hover:bg-red-600" : ""}`}
              >
                {menuItem.icon}
                <span className={`${!open && "hidden"} origin-left duration-200`}>{menuItem.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;






*/

import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Swal from 'sweetalert2';
import { useAuth } from '../utils/provider/AuthProvider';

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const { user, logout, loading } = useAuth();
  const [active, setActive] = useState("home");

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.8, rotate: -5 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1 }
    );
  }, []);

  if (loading) {
    return <div className="text-center p-10">🔄 جاري تحميل المستخدم...</div>;
  }

  if (!user) {
    return <div className="text-red-500 p-10">❌ لا يمكن تحديد الدور. تأكد من تسجيل الدخول.</div>;
  }

  const role = user.role;

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Log out me!"
    }).then(result => {
      if (result.isConfirmed) {
        logout();
        Swal.fire("Logged out!", "", "success");
        navigate('/');
      }
    });
  };

  const adminNavItems = [
    { name: "الرئيسية", path: "/", icon: "🏠" },
    { name: "لوحة البيانات", path: "/dashboard/market", icon: "🛒" },
//    { name: "طلبات", path: "/market", icon: "📬" },
    { name: "خروج", isLogout: true, icon: "🚪" },
  ];

  const agri = [
    { name: "الرئيسية", path: "/", icon: "🏠",label:"Home" },
    { name: "لوحة البيانات", path: "/dashboard/markett", icon: "📊" },
 { name: "ادخال بيانات الزراعة", path: "/dashboard/crud", icon: "✏️" ,label:"crud"},
 { name: "ادخال بيانات الانتاج", path: "/dashboard/paiment", icon: "💰", },
 { name: "المتجر",path:"/store", external:true, newTab:true, icon: "🛒" , label:"store"},
 
 { name:" خروج", isLogout: true, icon: "🚪" }
  ]
  const navItems = role === 'minister' ? adminNavItems : agri;

  return (
    <div className='flex'>
      <div ref={pageRef} className={`${open ? "w-56" : "w-[77px]"} bg-gray-900 shadow-lg text-white p-5 h-screen md:block hidden relative duration-300`}>
        <div className='flex gap-x-4 items-center'>
          <img
            src="/a.png"
            onClick={() => setOpen(!open)}
            alt=""
            className={`cursor-pointer h-[65px] duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <Link to='/'>
            <h1 className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open && 'scale-0'}`}>
              AGRITECH
            </h1>
          </Link>
        </div>

        <div className="bg-gray-900 text-white flex flex-col pt-8">
          <ul className="space-y-4">
            <p className={`ml-3 uppercase text-gray-500 ${!open && "hidden"}`}>
              <small>القائمة</small>
            </p>
            {navItems.map((menuItem, index) => (
              <li
                key={index}
               onClick={() => {
  if (menuItem.isLogout) {
    handleLogout();
  } else if (menuItem.external && menuItem.newTab) {
    window.open(menuItem.path, '_blank'); 
    window.location.href = menuItem.path;
  } else {
    navigate(menuItem.path);
  }
}}
                className={`flex gap-x-4 items-center duration-150 p-2 rounded-md cursor-pointer hover:bg-gray-700 ${menuItem.isLogout ? "hover:bg-red-600" : ""}`}
              >
                {menuItem.icon}
                <span className={`${!open && "hidden"} origin-left duration-200`}>{menuItem.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;