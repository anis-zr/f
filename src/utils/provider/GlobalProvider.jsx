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



import React, { useContext, useState } from "react";

import axiosInstance from "./axios";


const GlobalContext = React.createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      await axiosInstance.post("/income/add", income);
     
    } catch (err) {
      setError( "خطأ غير متوقع");
    }
   
  };

  const getIncomes = async () => {
    const response = await axiosInstance.get("/income/get");
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    await axiosInstance.delete(`/income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    return incomes.reduce((acc, curr) => acc + curr.amount, 0);
  };

  const addExpense = async (expense) => {
    try {
      await axiosInstance.post('/expense', expense);
      getExpenses();
    } catch (err) {
      setError(  "خطأ غير متوقع");
    }
  };
  const getExpenses = async () => {
    const response = await axiosInstance.get('/get-expenses');
    setExpenses(response.data);
  };

  const deleteExpense = async (id) => {
    await axiosInstance.delete(`/delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  };

  const totalBalance = () => totalIncome() - totalExpenses();

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
// context/GlobalContext.jsx

import { createContext, useContext, useState } from "react";
import axiosInstance from "./axios";
import { toast } from "react-toastify";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [error, setError] = useState(null);
  const getBudgets = async () => {
   
      const res = await axiosInstance.get("/budget/get");
      setBudgets(res.data);
  
 
  }

  const createBudget = async (data) => {
    try {
      await axiosInstance.post("/budget/add", data);
      
      
    } catch (err) {
  setError( "خطأ غير متوقع");
    }
  };



  const updateBudget = async (id, data) => {
    try {
      const res = await axiosInstance.put(`/budget/update${id}`, data, { withCredentials: true });
      toast.success("تم تعديل الميزانية");
      return res.data;
    } catch (err) {
      toast.error("فشل تعديل الميزانية");
    }
  };

  const deleteBudget = async (id) => {
    try {
      await axiosInstance.delete(`/budget/delete${id}`, { withCredentials: true });
      toast.success("تم حذف الميزانية");
    } catch (err) {
      toast.error("فشل حذف الميزانية");
    }
  };

  return (
    <GlobalContext.Provider value={{ budgets, getBudgets, createBudget, updateBudget, deleteBudget }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);







// GlobalProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import axiosInstance from './axios';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [error, setError] = useState('');

  const fetchBudgets = async () => {
    try {
      const response = await axiosInstance.get('/budget/get');
      setBudgets(response.data);
    } catch (err) {
      console.error(err);
      setError('فشل في تحميل الميزانيات');
    }
  };

  const createBudget = async (data) => {
    try {
      const res = await axiosInstance.post("/budget/add", data);
      setBudgets((prev) => [...prev, res.data]);
      toast.success("تم إنشاء الميزانية بنجاح");
    } catch (err) {
      console.error(err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
        toast.error(err.response.data.message);
      } else {
        setError('فشل في إنشاء الميزانية');
        toast.error('فشل في إنشاء الميزانية');
      }
    }
  };

  const deleteBudget = async (id) => {
    try {
      await axiosInstance.delete(`/budget/${id}`);
      setBudgets((prev) => prev.filter((budget) => budget._id !== id));
      toast.success("تم حذف الميزانية");
    } catch (err) {
      console.error(err);
      toast.error('فشل في حذف الميزانية');
    }
  };

  const updateBudget = async (id, updatedData) => {
    try {
      const res = await axiosInstance.put(`/budget/${id}`, updatedData);
      setBudgets((prev) =>
        prev.map((budget) => (budget._id === id ? res.data : budget))
      );
      toast.success("تم التعديل بنجاح");
    } catch (err) {
      console.error(err);
      toast.error('فشل في التعديل');
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        budgets,
        createBudget,
        deleteBudget,
        updateBudget,
        error,
        setError,
        fetchBudgets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

*/

// hooks/useBudgets.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import axiosInstance from './axios';

// Get all budgets
export const useBudgets = () => {
  return useQuery({
    queryKey: ['budgets'],
    queryFn: () => axiosInstance.get('/budget/get').then(res => res.data),
  });
};

// Create new budget
export const useCreateBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newBudget) => axiosInstance.post('/budget/add', newBudget),
    onSuccess: () => {
      queryClient.invalidateQueries(['budgets']);
    },
  });
};

// Delete budget
export const useDeleteBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axiosInstance.delete(`/budget/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['budgets']);
    },
  });
};

// Update budget
export const useUpdateBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => axiosInstance.put(`/budget/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['budgets']);
    },
  });
};