"use client";

export default function ProductForm() {

  const field = "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition";
  const err = "text-xs text-red-500 mt-1";
  const label = "text-xs font-medium text-zinc-500 uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
      <form className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 space-y-4">

        <div>
          <h1 className="text-xl font-semibold text-zinc-800">Nuevo producto</h1>
          <p className="text-sm text-zinc-400">Completa los datos para publicar</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className={label}>Título</label>
          </div>

          <div>
            <label className={label}>Precio</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-zinc-400">$</span>
            </div>
           
          </div>

          <div>
            <label className={label}>WhatsApp</label>
          </div>

          <div className="col-span-2">
            <label className={label}>Descripción</label>
           
          </div>
        </div>

        <div>
          <label className={label}>Fotos <span className="normal-case text-zinc-300">(máx. 5)</span></label>
          <label className="mt-1 flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-zinc-200 rounded-lg cursor-pointer hover:border-zinc-400 hover:bg-zinc-50 transition">
            <span className="text-sm text-zinc-400">Haz clic para subir fotos</span>
          </label>
        </div>

        <button type="submit" className="w-full bg-zinc-800 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 active:scale-95 transition">
          Publicar producto
        </button>
      </form>
    </div>
  );
}