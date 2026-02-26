"use client";
import React from 'react'
import { useBearStore } from '@/store';
import { titleFont } from '@/services/TextFont';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';

export const NavbarMenu = () => {
  const { data: session } = useSession(); 
  
  const isAuthenticatedSuperAdmin = !!(session?.user.role === "super-admin");
  const isAuthenticated = !!session?.user.role;


  return (
    <nav className='flex items-center justify-around w-full bg-green-600 h-20' >
      {!isAuthenticated &&(
      <>
      <div className='text-white font-bold'>
          <Link href="/">
            <span className='text-xl'>
              Tienda
            </span>
            <span className='font-bold'> | TDA</span>
          </Link>
        </div>
        <div className=''>
            <Link href="/login"
              className={`${titleFont.className} bg-black/30 p-2 rounded text-white`}
            >Inicia Sesion</Link>
          </div>
          </>
      )}

      {isAuthenticated && (
        <>
        <div className='text-white font-bold'>
          <Link href="/">
            <span className='text-xl'>
              Tienda
            </span>
            <span className='font-bold'> | TDA</span>
          </Link>
        </div>

          <Link href="/admin/products"
          className={`${titleFont.className} bg-black/30 px-3 py-1 rounded text-white`}>
          <p>Mis Productos</p>
          </Link>
        
          <Link href="/"
          className={`${titleFont.className} bg-black/30 px-3 py-1 rounded text-white`}>
          <p>+ Publicar</p>
          </Link>
      
        {/* <button
          onClick={() => signOut({callbackUrl: "/login" })}
          className={`${titleFont.className} bg-red-500 px-3 py-1 rounded text-white`}
        >
          salir
          </button> */}
          </>

      )}
       

    </nav>
      
  )
}
