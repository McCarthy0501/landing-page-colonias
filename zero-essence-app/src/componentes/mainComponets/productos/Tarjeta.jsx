import { useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import { useCarrito } from '../../../context/CarritoContext';

export const Tarjeta=({products})=> {
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const handleVerDetalle = (e) => {
    e.stopPropagation();
    navigate(`/producto/${products.id}`);
  };

  const handleAgregar = (e) => {
    e.stopPropagation();
    agregarAlCarrito(products);
  };

    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
      >
        <div className="relative overflow-hidden">
          <img
            src={products.image} 
            alt={products.nombre}
            className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              onClick={handleVerDetalle}
              className="bg-white p-3 rounded-full hover:bg-[#A38363] hover:text-white transition-colors"
              title="Ver detalle"
            >
              <FiEye size={20} />
            </button>
            <button
              onClick={handleAgregar}
              className="bg-[#A38363] text-white p-3 rounded-full hover:bg-[#8a6b52] transition-colors"
              title="Agregar al carrito"
            >
              <FiShoppingCart size={20} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-[#A38363] font-medium mb-1">
            {products.categoria || products.slug}
          </p>
          <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
            {products.nombre}
          </h3>
          {products.marca && (
            <p className="text-sm text-gray-500 mb-2">{products.marca}</p>
          )}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {products.description}
          </p>
          
          {products.precio && (
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[#A38363]">
                ${products.precio.toFixed(2)}
              </span>
              {products.ml && (
                <span className="text-xs text-gray-500">/{products.ml}ml</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
    
}
