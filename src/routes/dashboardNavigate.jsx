/*import React from 'react'
import useUser from '../hooks/useUser'
import { Navigate } from 'react-router-dom'

const DashboardNavigate = () => {
    const {currentUser, isLoading} = useUser()
    const role = currentUser?.role
    if(isLoading)
    {
        <div>loading ...</div>
      
    }
    if(role === 'minister') return <Navigate to='/dashboard/minister' replace/>
    if(role === 'agriculteur') return <Navigate to='/dashboard/student'replace/>

}

export default DashboardNavigate
*/