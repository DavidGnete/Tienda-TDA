"use client";
import Link from "next/link";
import React from "react";
import { Getpagination } from "@/utils";
import {  redirect, usePathname, useSearchParams  } from 'next/navigation'
import { getPaginateProducts } from "@/actions";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import clsx from "clsx";

interface Props {
    totalPages:number;
}

export const Pagination = ({totalPages}:Props) => {

    const pathname = usePathname()
    const SearchParamas = useSearchParams()
    const PageString = SearchParamas.get('page') ?? 1;
    const currentPage = isNaN(+PageString) ? 1: +PageString

    if (currentPage < 1 || isNaN(+PageString) ){
        redirect(pathname)
    }
    
    const allPages = Getpagination(currentPage, totalPages)

    const createURL = (pageNumber: number |string ) => {
        const params = new  URLSearchParams(SearchParamas);

        if (pageNumber === '...'){
            return `${pathname}?${params.toString()}`
        }

        if (+pageNumber <= 0 ){
            return `${pathname}`
        }

        if (+pageNumber > totalPages)
            return `${pathname}?${params.toString()}`

        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`
    }

  return (
    <div className="flex justify-center mt-10 mb-10">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
            
         
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createURL (currentPage -1)}
            >
             <IoChevronBackOutline size={30} />
            </Link>
          </li>
        {allPages.map( (page, index) => (
            <li key={page} className="page-item">
                <Link 
                className={
                    clsx("page-link relative block py-1.5 px-3  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                        {
                            'bg-blue-600 shadow-sm text-white hover:text-white hover:bg-blue-700':page === currentPage
                        }

                    )
                }
                href={createURL(page)}
                >
                    {page}
                </Link>
            </li>
            
        )) }
          
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={(createURL (currentPage +1))}
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
