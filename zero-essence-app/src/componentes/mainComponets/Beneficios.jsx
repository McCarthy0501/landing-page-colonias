
import { FiTruck, FiShield, FiAward, FiHeart, FiPackage, FiDollarSign } from 'react-icons/fi';

export const Beneficios = () => {
  const features = [
   
  {
    icon: <FiShield className="w-8 h-8 text-[#A38363] hover:text-[#d28d47]" />,
    title: "Autenticidad 100% Garantizada",
    description: "Todos nuestros perfumes son originales, pasando por estrictos controles para asegurar su calidad y duración de la esencia."
  },
 
  
  {
    icon: <FiPackage className="w-8 h-8 text-[#A38363] hover:text-[#d28d47]" />,
    title: "Selección Premium de Aromas",
    description: "Más de 500 esencias disponibles, incluyendo marcas de nicho, diseñador y ediciones limitadas."
  },
  {
    icon: <FiDollarSign className="w-8 h-8 text-[#A38363] hover:text-[#d28d47]" />,
    title: "Valor Superior en Cada Frasco",
    description: "Ofrecemos precios accesibles sin comprometer la autenticidad ni la exclusividad de tu fragancia."
  }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¿Por qué elegir a <span className="text-[#A38363]">Zero Essence</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En Zero Essence, entendemos que un perfume es mucho más que un simple aroma; es una extensión de tu personalidad, un recuerdo y una declaración de intenciones. Por eso, hemos perfeccionado cada parte de tu experiencia de compra para que sea tan exclusiva como las fragancias que vendemos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

