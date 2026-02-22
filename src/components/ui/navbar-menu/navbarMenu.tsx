"use client";
import React from 'react'
import { useBearStore } from '@/store';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';

export const NavbarMenu = () => {
  const { data: session } = useSession(); 
  const openSiMenu = useBearStore((state) => state.openSideMenu);


  return (
    <nav className='flex px-10 justify-between items-center w-full bg-green-600 h-20' >
      <div className='text-white font-bold'>
        <Link  href="/">
        <span className='text-xl'>
          Tienda
        </span>
        <span className='font-bold'> | TDA</span>
        </Link>
      </div>

      <div className='flex gap-10 items-center text-gray font-bold'>
        <button
        onClick={openSiMenu}
        className="hidden sm:block m-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        >Menu</button>
      </div>
      


    </nav>
  )
}
