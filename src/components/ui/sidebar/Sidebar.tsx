"use client";
import { useBearStore } from '@/store';
import Link from 'next/link';
import clsx from 'clsx';
import React from 'react'
import { IoCashOutline,
    IoCloseOutline,
    IoHomeOutline,
    IoListCircle,
    IoListOutline,
    IoLogInOutline,
    IoLogOutOutline, 
    IoPulseOutline} from 'react-icons/io5'
    import { HiOutlineClipboardList,} from 'react-icons/hi';
import { Logout } from '@/actions';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LuListPlus } from 'react-icons/lu';

export const Sidebar = () => {
    const isSideMenuOpen = useBearStore((state) => state.IsSiMenuOpen);
    const closeMenu = useBearStore((state) => state.CloseMenu);


    const { data: session, status } = useSession();
    
    const isAuthenticatedSuperAdmin = !!(session?.user.role === "super-admin");
    const isAuthenticated = !!session?.user.role;

  const router = useRouter();

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

    {}

   {/*  Buscador de filtro no se puso */}
    {isAuthenticated && (
        <>
        
    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <IoHomeOutline  size={30}/>
        <span className='ml-3 text-xl'>Inicio</span>
    </Link>
    <div className="w-full h-px bg-gray-300 my-10"></div>

    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <LuListPlus  size={30}/>
        <span className='ml-3 text-xl'>Publicar</span>
    </Link>

    
    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <IoListOutline  size={30}/>
        <span className='ml-3 text-xl'>Mis Productos</span>
    </Link>

        </>
    )}

    {isAuthenticatedSuperAdmin && (
        <>
    <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    >
        <HiOutlineClipboardList  size={30}/>
        <span className='ml-3 text-xl'>Todos los Productos</span>
    </Link>
        </>
    )}

    {isAuthenticated && (
        <>
         <Link 
    href="/"
    className='flex items-center mt-10 p-2 hover:bg-gray-300 rounded transition-all'
    onClick={() => signOut({ callbackUrl: "/login" })}
    >
        <IoLogOutOutline  size={30}/>
        <span className='ml-3 text-xl'>Salir</span>
    </Link>
        
        </>
    )}

    {!isAuthenticated && (
        <div className='flex flex-col mt-10 p-2'>
    <span className='ml-3 text-xl bg-blue-100 rounded w-full font-semibold'>Eres estudiante? inicia sesion</span>
    <Link 
    href="/login"
    className='flex items-center  hover:bg-gray-300 rounded transition-all'
    >
    <IoLogInOutline  size={40}/>
    <span className='ml-3 text-xl'>Ingresar</span>
    </Link>
    </div>
    )}
    </nav>
    </div>
  )
}
