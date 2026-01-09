//import React, { useState } from 'react'
import{MdOutlineAlternateEmail, MdOutlineRemoveRedEye} from 'react-icons/md'
/*import GoogleLogin from '../../components/Social/GoogleLogin'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const Login = () => {
    const [showPassword, setshowPassword] = useState(false)
    const location = useLocation()
    const {login, error,setError,loader, setLoader} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = e=>{
      setError('')
        e.preventDefault();
        const data = new FormData(e.terget)
        const formData = Object.fromEntries(data)
       login(formData.email, formData.password).then(()=>{
        navigate (location.state?.form || '/dashboard')
       }).catch((err)=>{
        setError(err.code);
        setLoader(false);
       })
      
    }
       import React, { useState } from 'react'
       import { Navigate, Link, useNavigate } from 'react-router-dom'
       import { doSignInWithEmailAndPassword,doSignInWithGoogle } from '../../config/auth'
      
       import { FcGoogle } from "react-icons/fc";
       import { FaEnvelope, FaLock} from "react-icons/fa";
import { useAuth } from '../../utils/provider/AuthProvider';
       const Login = () => {
        const { userLoggedIn } = useAuth()
       
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [isSigningIn, setIsSigningIn] = useState(false)
        const [errorMessage, setErrorMessage] = useState('')
        const [isRegister, setIsRegister] = useState(true);
        const navigate=useNavigate();
        const onSubmit = async (e) => {
            e.preventDefault()
            if(!isSigningIn) {
                setIsSigningIn(true)
                await doSignInWithEmailAndPassword(email, password)
               
                navigate("/")
                // doSendEmailVerification()
            }
        }
    
        const onGoogleSignIn = (e) => {
            e.preventDefault()
            if (!isSigningIn) {
                setIsSigningIn(true)
                doSignInWithGoogle().catch(err => {
                    setIsSigningIn(false)
                })
            }
        }
       
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[400px]">
       
        <div className="flex">
          <button
            className={`w-1/2 py-2 text-center font-semibold ${
              !isRegister ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(false)}
          >
            MINISTERE
          </button>
          <button
            className={`w-1/2 py-2 text-center font-semibold ${
              isRegister ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(true)}
          >
           AGRICULTEUR
          </button>
        </div>

        <div className="p-6">
    {isRegister ? (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8   '>
        {userLoggedIn && (<Navigate to={'/login'} replace={true} />)}
       <h1 className='text-2xl font-bold  text-green-500  sm:text-3xl text-center '> Get Started </h1>
       <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium officia quis possimus enim.</p>
      <div className='mx-auto max-w-lg mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
        
        <form onSubmit={onSubmit}className=' space-y-4'> 
            <p className='text-center text-red-400 text-lg font-medium '>Sign in to your account </p>
            <div>
     
                <div className="relative">
                              <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                              <input type="email" name="email" placeholder="Enter your email"  value={email} onChange={(e) => { setEmail(e.target.value)}}
                                  className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                          
                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4 '> <MdOutlineAlternateEmail className='h-4 w-4 text-gray-400 '/></span>
                </div>
            </div>
            <div>
                
                <label htmlFor=" password " className='sr-only '> password</label>
               

                <div className="relative">
                                  <FaLock className="absolute left-3 top-3 text-green-500" />
                                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                                      className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                              </div>
                    <span onClick={()=> setPassword(!password)} className='absolute inset-y-0 end-0 grid place-content-center px-4 '> <MdOutlineRemoveRedEye className='h-4 w-4 text-gray-400 '/></span>
                
            </div>
            <button type='submit' className=' block w-full rounded-lg bg-green-500 text-white  px-5  py-3 text-sm
            font-medium 
            
            ' > Sign in</button>


         <p className=' text-center text-sm text-gray-500'> No account ?
             <Link className= 'text-green-600 font-bold underline ' to ="/register">Sign up </Link></p>

               

        </form>
        <div className='flex flex-row text-center w-full'>
                        <div className='border-b-2 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-2 mb-2.5 ml-2 w-full'></div>
                    </div>
                    <button
                     disabled={isSigningIn}
                     onClick={(e) => { onGoogleSignIn(e) }}
                     className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
                     
                     <FcGoogle className='h-6 w-6 mr-2'/>
                     
                     {isSigningIn ? 'Signing In...' : 'Continue with Google'}</button>
         </div>
    </div>

  ): (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={onSubmit}className=' space-y-4'> 
      <p className='text-center text-red-400 text-lg font-medium '>Sign in to your account </p>
         <div className="relative">
                              <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                              <input type="email" name="email" placeholder="Enter your email"  value={email} onChange={(e) => { setEmail(e.target.value)}}
                                  className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                          </div>
      
              <div className="relative">
                                  <FaLock className="absolute left-3 top-3 text-green-500" />
                                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                                      className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                              </div>
          
                <button type='submit' className=' block w-full rounded-lg bg-green-500 text-white  px-5  py-3 text-sm
            font-medium 
            
            ' >Log In</button> </form>
    </div>
  )}
</div>
</div>
</div>
  )
}

export default Login
*/ 
/*<svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<clipPath id="clip0_17_40">
    <rect width="48" height="48" fill="white" />
</clipPath>
</defs>
</svg>


import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axiosInstance from '@/utils/provider/axios'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("فشل تسجيل الدخول");
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    // هنا تضيف كود تسجيل الدخول بـ Google إذا كنت مفعله
    alert("Google sign in not implemented yet");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <p className="text-center text-red-400 text-lg font-medium">
          Sign in to your account
        </p>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-green-500" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none"
            required
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-green-500" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
          >
            <MdOutlineRemoveRedEye className="h-4 w-4 text-gray-400" />
          </span>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg bg-green-500 text-white px-5 py-3 text-sm font-medium"
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-500">
          No account?{" "}
          <Link className="text-green-600 font-bold underline" to="/register">
            Sign up
          </Link>
        </p>
      </form>

      <div className="flex flex-row text-center w-full my-4">
        <div className="border-b-2 mb-2.5 mr-2 w-full"></div>
        <div className="text-sm font-bold w-fit">OR</div>
        <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
      </div>

      <button
        disabled={isSigningIn}
        onClick={onGoogleSignIn}
        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium ${
          isSigningIn
            ? "cursor-not-allowed"
            : "hover:bg-gray-100 transition duration-300 active:bg-gray-100"
        }`}
      >
        <FcGoogle className="h-6 w-6 mr-2" />
        {isSigningIn ? "Signing In..." : "Continue with Google"}
      </button>
    </div>
  );
};

export default Login;



//import React, { useState } from 'react'

       import React, { useState } from 'react'
       import { Navigate, Link, useNavigate } from 'react-router-dom'
      
      
 
       import { FaEnvelope, FaLock} from "react-icons/fa";

       const Login = () => {
     
       
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [isSigningIn, setIsSigningIn] = useState(false)
        const [errorMessage, setErrorMessage] = useState('')
        const [isRegister, setIsRegister] = useState(true);
        const navigate=useNavigate();
        const onSubmit = async (e) => {
            e.preventDefault()
            if(!isSigningIn) {
              
               
                navigate("/")
                // doSendEmailVerification()
            }
        }
    
    
       
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[400px]">
       
        <div className="flex">
          <button
            className={`w-1/2 py-2 text-center font-semibold ${
              !isRegister ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(false)}
          >
            MINISTERE
          </button>
          <button
            className={`w-1/2 py-2 text-center font-semibold ${
              isRegister ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(true)}
          >
           AGRICULTEUR
          </button>
        </div>

        <div className="p-6">
    {isRegister ? (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8   '>
        { (<Navigate to={'/login'} replace={true} />)}
       <h1 className='text-2xl font-bold  text-green-500  sm:text-3xl text-center '> Get Started </h1>
       <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium officia quis possimus enim.</p>
      <div className='mx-auto max-w-lg mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
        
        <form onSubmit={onSubmit}className=' space-y-4'> 
            <p className='text-center text-red-400 text-lg font-medium '>Sign in to your account </p>
            <div>
     
                <div className="relative">
                              <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                              <input type="email" name="email" placeholder="Enter your email"  value={email} onChange={(e) => { setEmail(e.target.value)}}
                                  className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                          
                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4 '> <MdOutlineAlternateEmail className='h-4 w-4 text-gray-400 '/></span>
                </div>
            </div>
            <div>
                
                <label htmlFor=" password " className='sr-only '> password</label>
               

                <div className="relative">
                                  <FaLock className="absolute left-3 top-3 text-green-500" />
                                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                                      className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                              </div>
                    <span onClick={()=> setPassword(!password)} className='absolute inset-y-0 end-0 grid place-content-center px-4 '> <MdOutlineRemoveRedEye className='h-4 w-4 text-gray-400 '/></span>
                
            </div>
            <button type='submit' className=' block w-full rounded-lg bg-green-500 text-white  px-5  py-3 text-sm
            font-medium 
            
            ' > Sign in</button>


         <p className=' text-center text-sm text-gray-500'> No account ?
             <Link className= 'text-green-600 font-bold underline ' to ="/register">Sign up </Link></p>

               

        </form>
        <div className='flex flex-row text-center w-full'>
                        <div className='border-b-2 mb-2.5 mr-2 w-full'></div>
                    </div>
                    
         </div>
    </div>

  ): (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={onSubmit}className=' space-y-4'> 
      <p className='text-center text-red-400 text-lg font-medium '>Sign in to your account </p>
         <div className="relative">
                              <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                              <input type="email" name="email" placeholder="Enter your email"  value={email} onChange={(e) => { setEmail(e.target.value)}}
                                  className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                          </div>
      
              <div className="relative">
                                  <FaLock className="absolute left-3 top-3 text-green-500" />
                                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                                      className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none" required />
                              </div>
          
                <button type='submit' className=' block w-full rounded-lg bg-green-500 text-white  px-5  py-3 text-sm
            font-medium 
            
            ' >Log In</button> </form>
    </div>
  )}
</div>
</div>
</div>
  )
}

export default Login


*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../AuthProvider';
; // تأكد من استيراد useAuth

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('agriculteur');
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password, role };
      await login(formData);

      // توجيه حسب الدور
      if (role === 'minister') {
        navigate('/dashboard');
      } else if(role ==='store') {
        navigate('/store');
      }
      else{
        navigate('/dashboard')
      }
    } catch (err) {
      alert('خطأ في تسجيل الدخول');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-7 border shadow-md rounded">
      <div className="flex mb-4">
        <button
          className={`w-1/3 py-3 font-semibold ${role === 'minister' ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => setRole('minister')}
        >
            الهيئات المختصة
        </button>
        <button
          className={`w-1/3 py-3 font-semibold ${role === 'agriculteur' ? "bg-green-500 text-white" : "bg-gray-200"}`}
        onClick={() => setRole('agriculteur')}
        >
         الفلاح
        </button>
             <button
          className={`w-1/3 py-3 font-semibold ${role === 'store' ? "bg-green-500 text-white" : "bg-gray-200"}`}
        onClick={() => setRole('store')}
        >
          المتجر
        </button>

        
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <h2 className="text-xl font-bold text-center">Sign in to your account</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Log In
        </button>

        {role === 'agriculteur' && (
          <p className="text-center">
            No account? <Link to="/register" className="text-blue-600">Sign up</Link>
          </p>
        )}
          {role === 'store' && (
          <p className="text-center">
            No account? <Link to="/registerr" className="text-blue-600">Sign up</Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

        
