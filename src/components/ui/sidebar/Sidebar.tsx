"use client";
import { useBearStore } from '@/store';
import Link from 'next/link';
import clsx from 'clsx';
import React from 'react'
import { IoCashOutline, IoCloseOutline, IoHomeOutline, IoListOutline, IoLogInOutline, IoLogOutOutline } from 'react-icons/io5'
import { TiHomeOutline } from 'react-icons/ti';

export const Sidebar = () => {
    const isSideMenuOpen = useBearStore((state) => state.IsSiMenuOpen);
    const closeMenu = useBearStore((state) => state.CloseMenu);
  return (
    <div>
        {isSideMenuOpen && (
            <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
        )}

    {isSideMenuOpen && (

    <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'></div>
    )}

    <nav 
    className = {
        clsx(
            'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
            {
                "translate-x-full": !isSideMenuOpen,
            },
        )
    }>

    <IoCloseOutline
    size={50}
    className='absolute top-5 right-5 cursor-pointer'
    onClick={() => closeMenu()}/>
    
   {/*  Buscador de filtro no se puso */}

    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <IoHomeOutline  size={30}/>
        <span className='ml-3 text-xl'>Home</span>
    </Link>

    <div className='flex flex-col mt-10 p-2'>
    <span className='ml-3 text-xl bg-blue-100 rounded w-full font-semibold'>Are you a student? Sell your products here</span>
    <Link 
    href="/"
    className='flex items-center  hover:bg-gray-300 rounded transition-all'
    >
    <IoLogInOutline  size={40}/>
    <span className='ml-3 text-xl'>Login</span>
    </Link>
    </div>

    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <IoCashOutline  size={30}/>
        <span className='ml-3 text-xl'>Sell a Product</span>
    </Link>

    
    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <IoListOutline  size={30}/>
        <span className='ml-3 text-xl'>My Products</span>
    </Link>

    
    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <IoLogOutOutline  size={30}/>
        <span className='ml-3 text-xl'>Logout</span>
    </Link>

    
   
    </nav>


    </div>
  )
}
