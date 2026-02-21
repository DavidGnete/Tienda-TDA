"use client";
import React from 'react'
import { useBearStore } from '@/store';
import { useEffect } from 'react';
import Link from 'next/link';

export const NavbarMenu = () => {
  const openSiMenu = useBearStore((state) => state.openSideMenu);


  return (
    <nav className='flex px-10 justify-between items-center w-full bg-green-600 h-20' >
      <div className='text-white font-bold'>
        <span className='text-xl'>
          Tienda
        </span>
        <span className='font-bold'> | TDA</span>
      </div>

      <div className='flex gap-10 items-center text-white font-bold'>
        <span>
          Inicio
        </span>
        <Link href="/login">
          Publica tu Producto
        </Link>
        <Link href="/login" >
          Inicia Sesion
        </Link>

        <button
        onClick={openSiMenu}
        className="hidden sm:block m-2 p-2 hover:bg-gray-100 rounded-md"
        >Menu</button>
      </div>
      


    </nav>
  )
}
