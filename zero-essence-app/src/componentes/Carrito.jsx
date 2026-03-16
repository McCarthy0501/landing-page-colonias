import { useCarrito } from '../context/CarritoContext';
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const Carrito = () => {
  const { 
    carrito, 
    removerDelCarrito, 
    actualizarCantidad, 
    totalItems, 
    totalPrecio,
    isCarritoOpen,
    setIsCarritoOpen
  } = useCarrito();
  const navigate = useNavigate();

  if (!isCarritoOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCarritoOpen(false)}
      />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            Carrito ({totalItems})
          </h2>
          <button
            onClick={() => setIsCarritoOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {carrito.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <FiShoppingCart size={48} className="mb-4 opacity-50" />
              <p className="text-lg">Tu carrito está vacío</p>
              <button 
                onClick={() => {
                  setIsCarritoOpen(false);
                  navigate('/productos');
                }}
                className="mt-4 text-[#A38363] hover:text-[#d28d47] font-medium"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {carrito.map(item => (
                <div 
                  key={item.id} 
                  className="flex gap-4 p-3 bg-gray-50 rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.nombre}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">
                      {item.nombre}
                    </h3>
                    <p className="text-[#A38363] font-bold">
                      ${(item.precio * item.cantidad).toFixed(2)}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          className="p-1 hover:bg-gray-200 rounded-l-lg"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.cantidad}
                        </span>
                        <button
                          onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          className="p-1 hover:bg-gray-200 rounded-r-lg"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removerDelCarrito(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {carrito.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-[#A38363]">${totalPrecio.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                setIsCarritoOpen(false);
                alert('¡Gracias por tu compra! En un proyecto real, esto iría a checkout.');
              }}
              className="w-full bg-[#A38363] hover:bg-[#8a6b52] text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
