import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { titleFont } from '@/services/TextFont'

export const PageNofound = () => {
  return (
     <div className='flex flex-col md:flex-col-reverse h-screen w-full justify-center items-center align-middle'>
        <div className='text-center px-5 mx-5'>
            {/* <h2 className={`${titleFont.className} antialiased text-9xl` }>404</h2> */}
            <p className={`${titleFont.className} antialiased text-3xl p-5`}>Lo sentimos mucho pagina no encontrada </p>
            <p className='font-ligth'>
                <span>Puedes regresar a </span>
                <Link
                href="/"
                className='font-semibold hover:underline transition-all border-b-2 border-black '>
                    Inicio
                </Link>
            </p>
        </div>

        <div>
            <Image 
            src="/imgs/NoFound.webp"
            alt="Starman"
            className="p-5 sm:p-0"
            width={550}
            height={800}>
            </Image>

        </div>
    </div>
  )
}
