/*import axios from "axios";
import { BASE_URL } from "./apiPath";


const axiosInstance= axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",    
 
    }
})


axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = localStorage.getItem("token");
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`

        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
axiosInstance.interceptors.response.use(
(response)=>{
return response;

},

(error)=> {

// Handle common errors globally

if (error.response) {

if (error.response.status=== 401) {

// Redirect to login page
window.location.href="/login";

} else if (error.response.status === 500) {

console.error("Server error. Please try again later.");
}

} else if (error.code == "ECONNABORTED") {

console.error("Request timeout. Please try again.");
}

return Promise.reject(error);

}



);






export default axiosInstance;


import axios from "axios";
import { BASE_URL } from "./apiPath"; // تأكد أن BASE_URL يشير إلى: "http://localhost:5000/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// إضافة الـ token في الهيدر إذا وُجد
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// التعامل مع الأخطاء الشائعة
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // إعادة توجيه المستخدم لتسجيل الدخول
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.error("خطأ في الخادم، حاول لاحقًا.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("انتهت مهلة الطلب. حاول مرة أخرى.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;*/


/*

// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // أو من sessionStorage إذا كنت تستخدمه
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;




// utils/axiosInstance.js
// === ملف: src/api/axiosInstance.js ===

*/


import axios from 'axios';
import { BASE_URL } from './apiPath';

const axiosInstance= axios.create({
    baseURL:BASE_URL,
    //timeout:10000,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",    
 
    }
})

// اختياري: لو عندك JWT token مخزّن في localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // أو sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;