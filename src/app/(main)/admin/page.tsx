"use server";
import { redirect } from "next/navigation";
import ProductForm from "./product/[slug]/page";




interface Props {
    params: {
        slug: string;
    }
}


export default async  function productPage({params}: Props ) {
    
  return (
    <div>
        <ProductForm />
    </div>
  );
}