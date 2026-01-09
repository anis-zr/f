
/*import React, {  createContext, useState } from 'react'

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signOut, updateProfile, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import axios from 'axios'

import {app} from '../../config/firebase.init'
 export const AuthContext = createContext()
const AuthProvider = ({children}) => {
     
        const [user ,setUser] = useState(null)
        const [error, setError] = useState('')
        const [loader, setLoader] = useState(true)
        const  auth  = getAuth(app)

        const signUp = async (email, password)=>{
            try{
              setLoader(true)
              return await createUserWithEmailAndPassword(auth,email,password)
            } catch(error){
                setError(error.code)
                throw error
            }

        }
        
        const login = async (email, password)=>{
            try{
              setLoader(true)
              return await signInWithEmailAndPassword(auth,email,password)
            } catch(error){
                setError(error.code)
                throw error
            }

        }
        
        const logout = async ()=>{
            try{
              setLoader(true)
              return await signOut(auth)
            } catch(error){
                setError(error.code)
                throw error
            }

        }
        
        const updateUser = async (name, photo)=>{
            try{
               await updateProfile(auth.currentUser,{
                displayName : name ,photoURL: photo
               })
               setUser(auth.currentUser)
            } catch(error){
                setError(error.code)
                throw error
            }

        }
        const  googleProvider = new GoogleAuthProvider();
        const googleLogin = async ()=>{
            try{
                setLoader(true)
             return  await signInWithPopup(auth, googleProvider)
               
             
            } catch(error){
                setError(error.code)
                throw error
            }

        }
 /*  useEffect(()=>{
    const unsubscribe = onAuthStateChanged((user)=>
    {
        setUser(user)
        if(user)
            axios.post('http://localhost:5000/api/set-token',{email:user.email,name:user.displayName})
          .then((data)=>{
            if(data.data.token){
              localStorage.setItem('token', data.data.token)
              setLoader(false)
            }

          })
        else localStorage.removeItem('token')
        setLoader(false)

    })
    return ()=> unsubscribe()
    
   },[])        
     
   const contextVale = {user , signUp, login ,logout,googleLogin, updateUser, error,setError}
  return (
    <AuthContext.Provider value={contextVale}>
    {children}
    
    </AuthContext.Provider >
    
  )
}

export default AuthProvider
 */  // AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from './axios';


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // جلب المستخدم الحالي عند تحميل التطبيق
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axiosInstance
        .get('/auth/me', {
          headers: {
            Authorization:` Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch(() => {
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  // دالة تسجيل الدخول
  const login = async (formData) => {
    const res = await axiosInstance.post('/auth/login', formData);
    setUser(res.data.user);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.user.role); // اختياري
  };

  // دالة تسجيل الخروج
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;