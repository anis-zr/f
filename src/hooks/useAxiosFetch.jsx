/*import { useEffect } from 'react'
import axios from 'axios'

const useAxiosFetch = () => {
    const axiosInstance = axios.create({
        baseURL: '/Classes'
    })
    useEffect(()=> {
        const requestInterceptor = axios.interceptors.request.use((config)=>{
            return config ;

        }, function (error){
            return Promise.reject(error);
        });
        const responseInterceptor= axios.interceptors.response.use((response)=>{
            return response;
        }, function (error) {
            return Promise.reject(error)
            
        });
      
     
    return ()=>{
        axios.interceptors.request.eject(requestInterceptor)
        axios.interceptors.response.eject(responseInterceptor)
    }

    },[axiosInstance])


  return axiosInstance
}

export default useAxiosFetch
*/