"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useActionState } from 'react';
import { authenticate } from '@/actions/auth/logint';
import { useSearchParams } from 'next/navigation';
import { signIn, useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { IoInformationOutline, IoLogoGoogle } from 'react-icons/io5';


export const LoginForm = () => {
    const router = useRouter();
    const {update } = useSession();
    
    const [errorMessage, formAction] = useActionState(authenticate, "pending");


  useEffect(() => {
  if (errorMessage === undefined){
    update()
    .then(() => {
      router.refresh();
      router.push('/')
    });
  }
  
}, [errorMessage]);

return (
    <form  action={formAction} className="space-y-3 ">  
    <div className="flex flex-col">

        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          name='email'
          type="email" />


        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          name='password'
          type="password" />

         {errorMessage && errorMessage ! == "pending" && (
            <div  className='flex flex-row mg-2'>
              <IoInformationOutline className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">Credenciales no son correctas</p>
            </div>
          )}

        <button type='submit'
          className="btn-primary">
          Ingresar
    
        </button>
   


        {/* divisor l ine */ }
        <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <div className="flex flex-col items-center">
      <button
        type="button"
        className="btn-primary flex items-center gap-3"
      >
        <IoLogoGoogle className="h-6 w-6" />
        Iniciar sesión con Google
      </button>

      <p className="text-sm text-gray-500 mt-4">
        Solo cuentas @correo.tdea.edu.co
      </p>
    </div>

    </div>
    </form>
)
}
