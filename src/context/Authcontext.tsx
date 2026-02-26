"use client";
import React, {createContext, useContext} from "react"
import { useSession, signOut} from "next-auth/react"


interface AuthContext {
    isAuthenticated: boolean;
    login: () => void
    logout: () => void
}

const Authcontext = createContext<AuthContext | undefined >(undefined)


export const useAuth = () => {
    const context = useContext(Authcontext);
    if (!context) {
        console.log('useAuth debe estar dentro de un AuthProvider')
    }
    return context;
}

export const AuthProvider:  React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: session} = useSession();
    const isAuthenticated = !!session;

    const login = () => {

    }

    const logout = () => {
        signOut({ callbackUrl: "/login"})
    };

    return (
    <Authcontext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </Authcontext.Provider>
    )

}