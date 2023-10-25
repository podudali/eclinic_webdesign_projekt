import React, { useContext, useState, createContext } from 'react'

type AuthContextProviderProps = {
    children: React.ReactNode;
}
type AuthUser = {
    userLoggedIn: boolean
    setUserLoggedIn: boolean
}

type UserContextType = {
    userLoggedIn: AuthUser | null
    setUserLoggedIn: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const AuthContext = React.createContext<UserContextType | any>(false)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [userLoggedIn, setUserLoggedIn] = useState<AuthUser | any>(false);
    return (
        <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}