import { useContext, useState, useEffect, createContext } from "react";
import {account} from '../AppwriteConfig'
import { ID } from "appwrite";
// import { useNavigate } from "react-router-dom";


const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
    // const navigate = useNavigate()
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
            // console.log(accountDetails)
            // console.log(accountDetails.name)
            // navigate("/")
        } catch (error) {
            console.error(error)
            alert('no user found!')
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
            const response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name)
            if (response) {
               await account.createEmailPasswordSession(userInfo.email, userInfo.password)
                const accountDetails = await account.get()
                setUser(accountDetails) 
            }else {
                console.log('response error: ' + JSON.stringify(response))
            }
            
            // // navigate("/")
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
            {loading ? 
                <div className='loader flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
 	                <span className='sr-only'>Loading...</span>
  	                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	                <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
                </div>
            : children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext