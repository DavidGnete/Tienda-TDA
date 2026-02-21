"use client";
import { Product } from "@/types";
import Link from "next/link";
import { ImageProducts } from "@/components/product/product-image/ImageProducts";
import { useState } from "react";

interface Props {
    product : Product
}

export const ProductGridItem = ({product}:Props) => {
    const [displayImage, setdisplayImages] = useState<string>(product.images?.[0] ?? '');

    return (
        <div className="rounded-md overflow-hidden fade-in">
             <Link  href={`/product/${product.slug}`}>    
    <div className='relative w-full aspect-square overflow-hidden rounded'>
        <ImageProducts
        src={displayImage}
        alt={product.title}
        className="object-cover rounded w-full h-full"
        width={500}
        height={500}
        ></ImageProducts>
        
        </div>
        </Link>
        
        <div className='p-4 flex flex-col '>
            <Link
            className='hover:text-blue-700'
            href={`/product/${product.slug}`}>
            {product.title}
            </Link>
            <span className='font-bold'>${product.price} </span>

        </div>

        </div>
    )
}