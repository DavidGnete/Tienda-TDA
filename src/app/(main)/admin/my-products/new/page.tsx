"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type ProductFormData = {
  title: string;
  price: number;
  description: string;
  phone: string;
};

export default function ProductForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>();
  const [photos, setPhotos] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const onSubmit = (data: ProductFormData) => {
    console.log({ ...data, photos });
  };

  const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, 5);
    setPhotos(files);
    setPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  const removePhoto = (i: number) => {
    setPhotos((p) => p.filter((_, idx) => idx !== i));
    setPreviews((p) => p.filter((_, idx) => idx !== i));
  };

  const field = "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition";
  const err = "text-xs text-red-500 mt-1";
  const label = "text-xs font-medium text-zinc-500 uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 space-y-4">

        <div>
          <h1 className="text-xl font-semibold text-zinc-800">Nuevo producto</h1>
          <p className="text-sm text-zinc-400">Completa los datos para publicar</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className={label}>Título</label>
            <input {...register("title", { required: "Requerido" })} placeholder="Ej: Zapatos Nike talla 42" className={field} />
            {errors.title && <p className={err}>{errors.title.message}</p>}
          </div>

          <div>
            <label className={label}>Precio</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-zinc-400">$</span>
              <input type="number" {...register("price", { required: "Requerido", min: 0 })} placeholder="0" className={`${field} pl-6`} />
            </div>
            {errors.price && <p className={err}>{errors.price.message}</p>}
          </div>

          <div>
            <label className={label}>WhatsApp</label>
            <input type="tel" {...register("phone", { required: "Requerido" })} placeholder="+57 300 000 0000" className={field} />
            {errors.phone && <p className={err}>{errors.phone.message}</p>}
          </div>

          <div className="col-span-2">
            <label className={label}>Descripción</label>
            <textarea {...register("description", { required: "Requerido" })} rows={3} placeholder="Describe tu producto..." className={`${field} resize-none`} />
            {errors.description && <p className={err}>{errors.description.message}</p>}
          </div>
        </div>

        <div>
          <label className={label}>Fotos <span className="normal-case text-zinc-300">(máx. 5)</span></label>
          <label className="mt-1 flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-zinc-200 rounded-lg cursor-pointer hover:border-zinc-400 hover:bg-zinc-50 transition">
            <span className="text-sm text-zinc-400">Haz clic para subir fotos</span>
            <input type="file" multiple accept="image/*" onChange={handlePhotos} className="hidden" />
          </label>
          {previews.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap">
              {previews.map((src, i) => (
                <div key={i} className="relative w-16 h-16">
                  <img src={src} className="w-full h-full object-cover rounded-lg" />
                  <button type="button" onClick={() => removePhoto(i)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">×</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="w-full bg-zinc-800 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 active:scale-95 transition">
          Publicar producto
        </button>
      </form>
    </div>
  );
}