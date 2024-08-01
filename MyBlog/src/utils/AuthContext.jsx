import { useContext, useState, useEffect, createContext } from "react";
import {account} from '../AppwriteConfig'
import { ID } from "appwrite";
// import { useNavigate } from "react-router-dom";


const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        checkUserStatus()
    },[])
    
    // const navigate = useNavigate()


    //login logic for appwrite
    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            const response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            const accountDetails = await account.get()
            setUser(accountDetails)
            // navigate("/")
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    //logout logic for appwrite
    const logoutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }

    
    //register logic for appwrite
    const registerUser = async (userInfo) => {
        setLoading(true)
        try {
            const response = await account.create( ID.unique(), userInfo.name, userInfo.email, userInfo.password )
            await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            const accountDetails = await account.get()
            setUser(accountDetails)
            // navigate("/")
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }


    //check user status for appwrite
    const checkUserStatus = async () => {
        try {
            const accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext