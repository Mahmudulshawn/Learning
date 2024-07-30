import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'



const ProtectedRoute = ({ children }) => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) {
            setLoading(true)
            navigate('/login')
        }else{
            <Outlet />
            setLoading(false)
        }
    },[])
    
    return loading ? <p>Loading...</p> : <>{children}</>
}


export default ProtectedRoute