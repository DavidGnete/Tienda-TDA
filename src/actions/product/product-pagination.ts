'use server';
import { Mocking } from "@/seed/seed";

interface PaginationOption{
    page?: number;
    take?: number;


}


export const getPaginateProductsWithImages =async({
    page =  1,
    take = 12,
  
}: PaginationOption ) => {

    if (isNaN( Number (page))) page = 1;
    if (page < 1 ) page = 1;

    try{
      const skip = (page -1) * take;
      const products = Mocking.slice(skip, skip + take);
      const totalPage = Math.ceil(Mocking.length / take);

      return {
        currentPage: page,
        totalPage,
        products,
    }
    }catch (error) {
        console.error("No se pudieron cargar los productos",error)
        throw new Error

    };
    
};