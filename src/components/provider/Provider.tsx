"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/context/Authcontext";



interface Props {
    children: React.ReactNode
}

export const Provider = ({children}:Props ) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
    
   
    
  )
}


