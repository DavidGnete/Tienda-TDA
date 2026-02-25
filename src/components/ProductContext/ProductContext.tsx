"use client";
import { createContext, useContext, useState } from "react";
import { Mocking } from "@/seed/seed";
import { Product } from "@/types";

// ─── Tipo del contexto ────────────────────────────────────────────────────────
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (slug: string, product: Product) => void;
  deleteProduct: (slug: string) => void;
  getProductBySlug: (slug: string) => Product | undefined;
}

// ─── Crear el contexto ────────────────────────────────────────────────────────
const ProductContext = createContext<ProductContextType | null>(null);

// ─── Provider — envuelve la app y comparte el estado ─────────────────────────
export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  
  // Arranca con los datos del seed
  const [products, setProducts] = useState<Product[]>(Mocking as Product[]);

  // ── Agregar producto nuevo ──
  const addProduct = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
  };

  // ── Editar producto existente ──
  const updateProduct = (slug: string, updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, ...updatedProduct } : p))
    );
  };

  // ── Eliminar producto ──
  const deleteProduct = (slug: string) => {
    setProducts((prev) => prev.filter((p) => p.slug !== slug));
  };

  // ── Obtener un producto por slug ──
  const getProductBySlug = (slug: string) => {
    return products.find((p) => p.slug === slug);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProductBySlug }}>
      {children}
    </ProductContext.Provider>
  );
};

// ─── Hook para consumir el contexto ──────────────────────────────────────────
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts debe usarse dentro de ProductProvider");
  return context;
};