

import {  FaEnvelope, FaLock, FaRegIdCard , FaTransgender } from "react-icons/fa";
import {   Link} from "react-router-dom";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axiosInstance from "../provider/axios";


const Registerr=()=> {
  const [formData, setFormData] = useState({
 
    
    
    email: "",
    password: "",
  
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData((prev) => ({
      ...prev,
     [ name]:name === "numCard"?
     Number(value):value
      
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/registerr",formData);
      localStorage.setItem("token", res.data.token);
      toast.success("تم إنشاء الحساب بنجاح");

  
        navigate("/login");
      
    } catch (err) {
      toast.error(err.response?.data?.message || "فشل التسجيل");
    }
  };
   return (
        <div className="flex justify-center items-center min-h-screen bg-green-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-2xl font-bold text-green-600 text-center mb-4">Register</h2>
                <form  onSubmit={handleSubmit}  className="space-y-4">
                    
                <div className="relative">
  </div>

                   
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                        <input type="email" name="email" value={formData.email}    placeholder="Enter your email" onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                    </div>

                   
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-green-500" />
                        <input type="password" name="password" value={formData.password}   placeholder="Enter Password" onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                    </div>


               

               

                  
                    <button type="submit"className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
                        Register
                    </button>

                    <p className="text-center text-sm mt-2">
                        Already have an account?   <Link className= 'text-green-600 font-bold underline ' to ="/login">LogIn  </Link>
                    </p>

                </form>
            </div>
        </div>
    );
};


export default Registerr;