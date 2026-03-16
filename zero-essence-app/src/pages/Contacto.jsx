import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contáctanos
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta sobre nuestros productos? ¡Estamos aquí para ayudarte!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Envíanos un mensaje
          </h2>
          
          {enviado && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
              ¡Mensaje enviado con éxito! Te responderemos pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A38363] focus:border-transparent outline-none transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A38363] focus:border-transparent outline-none transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A38363] focus:border-transparent outline-none transition-all"
                placeholder="+1 234 567 890"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A38363] focus:border-transparent outline-none transition-all resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A38363] hover:bg-[#8a6b52] text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <FiSend /> Enviar mensaje
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información de contacto
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#A38363]/10 p-3 rounded-full">
                  <FiMail className="text-[#A38363]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contacto@zeroessence.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A38363]/10 p-3 rounded-full">
                  <FiPhone className="text-[#A38363]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A38363]/10 p-3 rounded-full">
                  <FiMapPin className="text-[#A38363]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">Av. Principal 123<br />Ciudad, Estado 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A38363]/10 p-3 rounded-full">
                  <FiClock className="text-[#A38363]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horario de atención</h3>
                  <p className="text-gray-600">Lun - Sáb: 9:00 AM - 8:00 PM<br />Domingos: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">¿Prefieres llamarnos?</h3>
            <p className="text-gray-300 mb-4">
              Nuestro equipo de atención al cliente está disponible para ayudarte.
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-[#A38363] hover:bg-[#8a6b52] px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <FiPhone /> Llámanos ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
