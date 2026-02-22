'use client';
import { ProductImage} from "@/types";
import Image from "next/image";


export const ImageProducts = ({src, alt, className, width, height, style, onMouseEnter, onMouseLeave}:ProductImage) => {

    const localSRC = (src)
    ? src.trim().startsWith('http')
    ? src
    :`/products/${src}`
    :'/imgs/placeholder.jpg';
    return(
        <Image 
        src={localSRC}
        width={width}
        height={height}
        alt={alt}
        className={className}
        style={style}
        unoptimized
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        />
    )
}