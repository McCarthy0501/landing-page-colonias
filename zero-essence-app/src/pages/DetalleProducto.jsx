import { useParams, useNavigate } from 'react-router-dom';
import { getProductoPorId } from '../componentes/mainComponets/productos/products';
import { useCarrito } from '../context/CarritoContext';
import { FiShoppingCart, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

export const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const producto = getProductoPorId(id);

  if (!producto) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
        <button 
          onClick={() => navigate('/productos')}
          className="text-[#A38363] hover:text-[#d28d47] flex items-center gap-2"
        >
          <FiArrowLeft /> Volver a productos
        </button>
      </div>
    );
  }

  const handleAgregar = () => {
    agregarAlCarrito(producto, cantidad);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-[#A38363] mb-6 transition-colors"
      >
        <FiArrowLeft /> Volver
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative">
          <img
            src={producto.image}
            alt={producto.nombre}
            className="w-full h-[400px] md:h-[500px] object-cover object-center rounded-2xl shadow-xl"
          />
          {producto.disponible && (
            <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Disponible
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-[#A38363] font-medium mb-2">{producto.categoria}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {producto.nombre}
          </h1>
          <p className="text-gray-500 mb-4">{producto.marca}</p>
          
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold text-[#A38363]">
              ${producto.precio.toFixed(2)}
            </span>
            <span className="text-gray-500">/ {producto.ml}ml</span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {producto.description}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <label className="text-gray-700 font-medium">Cantidad:</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 font-medium">{cantidad}</span>
              <button
                onClick={() => setCantidad(cantidad + 1)}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAgregar}
            disabled={!producto.disponible}
            className={`flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] ${
              agregado 
                ? 'bg-green-500 text-white' 
                : 'bg-[#A38363] hover:bg-[#8a6b52] text-white'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {agregado ? (
              <>
                <FiCheck /> Agregado al carrito
              </>
            ) : (
              <>
                <FiShoppingCart /> Agregar al carrito
              </>
            )}
          </button>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Marca:</span>
                <span className="ml-2 font-medium text-gray-900">{producto.marca}</span>
              </div>
              <div>
                <span className="text-gray-500">Volumen:</span>
                <span className="ml-2 font-medium text-gray-900">{producto.ml}ml</span>
              </div>
              <div>
                <span className="text-gray-500">Categoría:</span>
                <span className="ml-2 font-medium text-gray-900">{producto.categoria}</span>
              </div>
              <div>
                <span className="text-gray-500">Estado:</span>
                <span className="ml-2 font-medium text-green-600">
                  {producto.disponible ? 'En stock' : 'Agotado'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
