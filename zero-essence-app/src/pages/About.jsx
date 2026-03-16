import { FiAward, FiHeart, FiStar, FiTruck } from 'react-icons/fi';

export const About = () => {
  const valores = [
    {
      icon: <FiAward className="text-[#A38363]" size={32} />,
      titulo: "Calidad Premium",
      descripcion: "Solo trabajamos con las mejores marcas y productos auténticos garantizados."
    },
    {
      icon: <FiHeart className="text-[#A38363]" size={32} />,
      titulo: "Pasión por las Fragancias",
      descripcion: "Nuestro equipo está formado por verdaderos amantes de las fragancias."
    },
    {
      icon: <FiStar className="text-[#A38363]" size={32} />,
      titulo: "Excelencia en Servicio",
      descripcion: "Brindamos una experiencia de compra excepcional a cada cliente."
    },
    {
      icon: <FiTruck className="text-[#A38363]" size={32} />,
      titulo: "Envío Rápido",
      descripcion: "Entregamos tus productos de forma segura y en tiempo récord."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sobre Zero Essence
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Somos tu destino definitivo para encontrar las fragancias perfectas que 
          complementan tu personalidad y estilo de vida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Nuestra Historia
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Fundada con la misión de hacer las fragancias premium accesibles para todos, 
            Zero Essence ha crecido hasta convertirse en un referente en el mundo de la perfumería.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Nos dedicamos a seleccionar cuidadosamente cada producto de nuestro catálogo, 
            asegurándonos de que cada fragancia que vendemos cumpla con los más altos 
            estándares de calidad y autenticidad.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nuestro equipo de expertos prueba y evalúa cada fragrance para garantizar 
            que tu experiencia con nosotros sea extraordinaria.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#A38363]/20 to-[#8a6b52]/20 rounded-2xl p-8">
          <div className="text-center">
            <span className="text-6xl font-bold text-[#A38363]">10+</span>
            <p className="text-gray-700 font-semibold mt-2">Años de experiencia</p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">500+</span>
              <p className="text-gray-600 text-sm">Marcas disponibles</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">50K+</span>
              <p className="text-gray-600 text-sm">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">100%</span>
              <p className="text-gray-600 text-sm">Productos auténticos</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">24/7</span>
              <p className="text-gray-600 text-sm">Atención al cliente</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                {valor.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {valor.titulo}
              </h3>
              <p className="text-gray-600 text-sm">
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#A38363] rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para encontrar tu fragancia perfecta?
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Explora nuestro catálogo y descubre las mejores fragancias del mercado. 
          Nuestro equipo está listo para ayudarte.
        </p>
        <a 
          href="/productos"
          className="inline-block bg-white text-[#A38363] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Ver Productos
        </a>
      </div>
    </div>
  );
};
