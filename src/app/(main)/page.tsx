import Image from "next/image";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Mocking } from "@/seed/seed";
import { Suspense } from "react";



export default function Home() {
  return (
    <>
      <ProductGrid products={Mocking} />
    </>
  );
}
