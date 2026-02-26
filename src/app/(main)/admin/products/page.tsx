import React from 'react'
import { Pagination } from '@/components';
import { getPaginateProducts } from '@/actions';
import { ImageProducts } from '@/components';
import { Mocking } from '@/seed/seed';
import { Product } from '@/types';
import { Title } from '@/components/ui/title/Title';
import {  IoTrashOutline } from 'react-icons/io5';


import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

interface Props {
  searchParams:{
    page?: string
  }
}


export default async function ProductsView({searchParams}:Props) {

  const params = await searchParams

  const page = params.page ? parseInt(params.page) : 1;

  const {products, currentPage, totalPages} = await getPaginateProducts({page});


  /* const { products, currentPage, totalPages } = await getPaginateProductsWithImages({ page }); */


  return (
    <>
      <Title title="Mantenimeinto de Productos" />


      <div className="flex justify-end mb-5">
        <Link href='/admin/product/new' className="btn-primary">
            Nuevo Producto
        </Link>

      </div>

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Imagen
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Titulo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Precio
              </th>
             
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Editar
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Eliminar
         
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
            <tr 
            key={product.id}
            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
            >

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                
            <Link href={`/product/${product.slug}`}>

              <ImageProducts
              src={`${product.images}`}
                width={80}
                height={80}
                alt={product.title }
                className="w-20 h-20 object-cover rounded"
                />

            </Link>

              </td>

              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                
                <Link 
                href={`/admin/product/${product.slug}`}
                className="hover:underline"
                >
                    {product.title}
                </Link>
              </td>

              <td className="text-sm  text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
            {( product.price)}
              </td>

              {/* <td className="text-sm  text-gray-900 font-ligth px-6 py-4 whitespace-nowrap">
            {product.gender}
              </td> */}

               <td className="text-sm  text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <FaEdit />
              </td>
               <td className="text-sm  text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <IoTrashOutline />
              </td>

            </tr>
            ))}

          </tbody>
        </table>

        <Pagination totalPages={ totalPages } />
      </div>
    </>
  );
}
