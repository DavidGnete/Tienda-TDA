import Image from "next/image";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Mocking } from "@/seed/seed";
import { getPaginateProducts } from "@/actions";
import { Title } from "@/components/ui/title/Title";
import { Pagination } from "@/components";


interface Props {
   searchParams:{
    page: string,
    image: string
   }
}

export default async function Home({searchParams}: Props) {
  const params = await searchParams;

  const page = params.page ? parseInt (params.page) : 1;

  const {products, currentPage, totalPages} = await getPaginateProducts({page});
  console.log(currentPage, products)

  return (
    <>
    <Title  subtitle="Todos los productos " className="font-bold"  />
      {<ProductGrid products={ products} />}

      <Pagination totalPages={totalPages} />
    </>
  );
}
