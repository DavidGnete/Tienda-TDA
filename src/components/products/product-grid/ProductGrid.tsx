import { ProductGridItem } from "./ProductGridItems";
import { Product } from "@/types";

interface Props {
    products: Product[];
}

export const ProductGrid = ({products}: Props) => {
     return (
    <div className="grid grid-cols-2 p-6 sm:grid-cols-3 gap-10 mb-10 md:p-20 ">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product}></ProductGridItem>
      ))}
    </div>
  );
}