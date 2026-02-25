"use client";
import Image from "next/image";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Mocking } from "@/seed/seed";
import { useProducts } from "@/components/ProductContext/ProductContext";




export default function Home() {
  const { products } = useProducts();
  return (
    <>
      <ProductGrid products={products} />
    </>
  );
}
