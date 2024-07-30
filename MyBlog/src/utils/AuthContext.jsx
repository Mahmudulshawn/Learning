import { useContext, useState, useEffect, createContext } from "react";


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const loginUser = (userInfo) => {}

    const logoutUser = () => {}

    const registerUser = (userInfo) => {}

    const checkUserStatus = () => {}

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext