import { useState } from "react";
import { Tarjeta } from "./Tarjeta";
import { Categorias_perfumes, getTodosLosProductos } from "./products";

export const Perfumes = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  
  const productos = getTodosLosProductos();
  
  const categorias = [
    { id: "todos", nombre: "Todos" },
    { id: "Damas", nombre: "Damas" },
    { id: "Caballeros", nombre: "Caballeros" },
  ];

  const productosFiltrados = categoriaSeleccionada === "todos"
    ? productos
    : productos.filter(p => p.categoria === categoriaSeleccionada);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
         Nuestros Perfumes
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra colección de fragancias premium para todas las ocasiones
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaSeleccionada(cat.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              categoriaSeleccionada === cat.id
                ? "bg-[#A38363] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productosFiltrados.map((producto) => (
          <Tarjeta key={producto.id} products={producto} />
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron productos en esta categoría
          </p>
        </div>
      )}
    </div>
  );
};