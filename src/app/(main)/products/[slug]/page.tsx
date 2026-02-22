import { ProductMovileSlideShop, ProductSlideShow } from "@/components";
import { Mocking } from "@/seed/seed";
import { titleFont } from "@/services/TextFont";
import { Product } from "@/types";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ({ params }: Props) {
  const { slug } = await params;
  const product = Mocking.find((product) => product.slug === slug);

  if (!product) {
    console.log("producto no encontrado");
    notFound();
  }

  return (
    <div className="mt-5 mb-30 grid grid-cols-1 md:grid-cols-3 gap-3 ">
      {/* Espacio image */}
      <div className="col-span-1 md:col-span-2">
        <ProductMovileSlideShop
          title={product.title}
          images={product.images}
          clasName="block md:hidden"
        />

        <ProductSlideShow
          title={product.title}
          images={product.images}
          clasName="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price} </p>

        <button className="btn-primary my-5">Agregar al Carro</button>

       {/*  Descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">
          {product.description}</p>
      </div>
    </div>
  );
}
