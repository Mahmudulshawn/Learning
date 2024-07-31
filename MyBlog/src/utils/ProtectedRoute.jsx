import { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'



const ProtectedRoute = ({ children }) => {
    const {user} = useAuth()
    
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     if (!user) {
    //         setLoading(true)
    //         navigate('/login')
    //     }else{
    //         <Outlet />
    //         setLoading(false)
    //     }
    // },[])
    
    return user ? <Outlet/> : <Navigate to="/login"/>
}


export default ProtectedRoute