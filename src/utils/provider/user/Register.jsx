/*import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../utils/provider/AuthProvider'
import { doCreateUserWithEmailAndPassword } from '../../config/auth'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/register'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-sm text-center">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register*/

 





/*
import React from 'react'

const Register = () => {
 
  return(
  
    
  
       
         
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md mb-2"
              />
           
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md mb-2"
              />
              <div className="flex gap-2 mb-4">
                <label className="flex items-center">
                  <input type="radio" name="verify" className="mr-2" /> Email
                </label>
                <label className="flex items-center">
                  <input type="radio" name="verify" className="mr-2" /> Phone
                </label>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-md">
                Register
              </button>
            </div>
               
  )}

export default Register;
 

import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
import { FaRegIdCard } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Register = () => {
 
  const [number, setNumber] = useState("");
  const onSubmit=data=> console.log(data);
  
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // يسمح فقط بالأرقام
      setNumber(value);
    
  };}
  

  return (
    
     <div className="flex justify-center items-center pt-14 bg-gray-100">
      <div className=" bg-white p-4 rounded-lg shadow-md">
        
    
       
          <h2 className="text-3xl font-bold  text-center mb-6 ">Register</h2>
          <form >
          <div className="flex items-center gap-5 "> </div>
            <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          <FaRegIdCard className="inline-block mr-2 mb-1 text-lg" />
             </label>
              <input
          type="text"
         value={number}
         onChange={handleChange}
         placeholder="Num carte"
        className="w-full border-green-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border
          
         "
             />
             </div>


             <div className="mb-4">
             <label htmlFor="email" className="block  text-gray-700 font-bold mb-2">
             <MdOutlineMail className="inline-block mr-2 mb-1 text-lg" /> 
             </label>
             
          <input type="email" placeholder="Email" className="w-full border-green-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border
          
          " />
          </div>
             

          
             <div className="mb-4">
             <label htmlFor="confirmpassword" className="block  text-gray-700 font-bold mb-2">
             <RiLockPasswordLine className="inline-block mr-2 mb-1 text-lg" /> 
             </label>
             
          <input type="text" placeholder="confirm password" className="w-full border-green-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border
          
          " />
          
          
       
       
         </div>
            <div className="mb-4">
             <label htmlFor="password" className="block  text-gray-700 font-bold mb-2">
             <RiLockPasswordLine className="inline-block mr-2 mb-1 text-lg" /> 
             </label>
             
          <input type="text" placeholder="password" className="w-full border-green-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-green-50
          
          " />
          
          </div>
       
             
   
           
       
        
        
       
     
       </form> 
        </div> </div>
          
    
  );
}

export default Register;


import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaRegIdCard , FaTransgender, FaMapMarkerAlt, FaImage } from "react-icons/fa";
import { useNavigate , Link} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
       const [isSigningIn, setIsSigningIn] = useState(false)
       const [number, setNumber] = useState("");
    const [formData, setFormData] = useState({
        numcard:'',  email: "", password: "", confirmPassword: "", gender: "", photoUrl: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
          
         
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        }
    };
    
           const onSubmit = async (e) => {
                e.preventDefault()
                if(!isSigningIn) {
                    setIsSigningIn(true)
                    await doSignInWithEmailAndPassword(email, password)
                    // doSendEmailVerification()
                }
            }
            
         const handleChangee = (e) => {
           const value = e.target.value;
           if (/^\d*$/.test(value)) { // يسمح فقط بالأرقام
             setNumber(value);
           
         };}
         
    return (
        <div className="flex justify-center items-center min-h-screen bg-green-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-2xl font-bold text-green-600 text-center mb-4">Register</h2>
                <form  onSubmit={handleSubmit}  className="space-y-4">
                    
                <div className="relative">
  
          <FaRegIdCard className="absolute left-3 top-3 text-green-500" />
             
              <input
          type="text"
         value={number}
         onChange={handleChangee}
         placeholder="Num carte"
         className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none required
          
         "
             /> </div>

                   
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                    </div>

                   
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-green-500" />
                        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                    </div>

               
                    <div className="relative">
                        <FaTransgender className="absolute left-3 top-3 text-green-500" />
                        <select name="gender" onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none bg-white" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
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

export default Register;


*/// Register.jsx






import {  FaEnvelope, FaLock, FaRegIdCard , FaTransgender } from "react-icons/fa";
import {   Link} from "react-router-dom";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axiosInstance from "../axios";


const Register=()=> {
  const [formData, setFormData] = useState({
 
    numCard:"",
    gender:"",
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
      const res = await axiosInstance.post("/auth/register",formData);
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
  
          <FaRegIdCard className="absolute left-3 top-3 text-green-500" />
             
              <input
          type="number"
         value={formData.numCard}
         name="numCard"
         required
         onChange={handleChange}
         min="0"
         placeholder="Num carte"
         className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none required
          
         "
             /> </div>

                   
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


                    <div className="relative">
                        <FaTransgender className="absolute left-3 top-3 text-green-500" />
                        <select name="gender" value={formData.gender}   onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none bg-white" required>
                            <option value="">اختر الجنس</option>
                            <option value="Male">ذكر</option>
                            <option value="Female">مراة</option>
                        </select>
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


export default Register;