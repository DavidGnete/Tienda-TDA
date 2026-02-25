"use client";

import { SessionProvider } from "next-auth/react";
import { ProductProvider } from "../ProductContext/ProductContext";


interface Props {
    children: React.ReactNode
}

export const Provider = ({children}:Props ) => {
  return (
    <SessionProvider>
      <ProductProvider >
        {children}
      </ProductProvider>
    </SessionProvider>
    
   
    
  )
}


