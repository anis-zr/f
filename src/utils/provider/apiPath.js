

export const BASE_URL = "http://localhost:8000/api/v1"


export const API_PATHS ={
    AUTH:{

     LOGIN:"/api/v1/income/login",
     REGISTER:"/api/vl/income/register",
     GET_USER_INFO:"/api/vl/income/getUser",


    },
    DASHBOARD:{
        GET_DATA:"/api/v1/dashboard"
    },
    INCOME:{
   ADD_INCOME:"/api/v1/income/add",
   GET_ALL_INCOME:"/api/v1/income/get",
   Delete_INCOME:(incomeId)=> `/api/v1/income/${incomeId}`,
   DOWNLOAD_INCOME:'/api/v1/income/downloadexcel'

    },

    EXPENSE:{
        ADD_EXPENSE:"/api/v1/expense/add",
        GET_ALL_EXPENSE:"/api/v1/expense/get",
        Delete_EXPENSE:(expenseId)=> `/api/v1/expense/${expenseId}`,
        DOWNLOAD_EXPENSE:'/api/v1/expense/downloadexcel'


    },
   /* IMAGE:{
UPLOAD_IMAGE:'/api/vl/auth/upload-image',

    }*/
}