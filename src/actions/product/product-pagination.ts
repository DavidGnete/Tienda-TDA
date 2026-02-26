'use server';
import { Mocking } from "@/seed/seed";

interface PaginationOption {
    page?: number;
    take?: number;
}

export const getPaginateProducts = async ({
    page = 1,
    take = 9,
}: PaginationOption) => {

    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    try {
        const allProducts = Mocking

        const totalCount = allProducts.length;
        const totalPages = Math.ceil(totalCount / take);

        const start = (page - 1) * take;
        const end   = start + take;

        const products = allProducts
            .slice(start, end)
            .map(product => ({
                ...product,
                images: product.images.slice(0, 2) // 👈 solo 2 imágenes
            }));

        return {
            currentPage: page,
            totalPages,
            totalProducts: totalCount,
            products,
        };

    } catch (error) {
        console.error("Error al obtener productos", error);
        throw new Error("No se pudieron cargar los productos");
    }
};