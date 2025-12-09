import { useState, useEffect } from "react";
import img1 from "../../assets/img/carrucelimg/1.webp";
import img2 from "../../assets/img/carrucelimg/2.webp";
import img3 from "../../assets/img/carrucelimg/3.webp";
import img4 from "../../assets/img/carrucelimg/4.webp";

export const Carrucel = () => {
  // Configuración del intervalo de tiempo en milisegundos (ejemplo: 3000ms = 3 segundos)
  const AUTOPLAY_INTERVAL = 3000; 

  // Array de imágenes por URL (sin cambios)
  const slides = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente slide (sin cambios)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Función para retroceder al slide anterior (sin cambios)
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // 🔄 Implementación del carrusel automático con useEffect
  useEffect(() => {
    // 1. Configurar un temporizador (setInterval)
    const intervalId = setInterval(() => {
      // 2. Llamar a la función para avanzar cada cierto tiempo
      nextSlide();
    }, AUTOPLAY_INTERVAL); // Usa el intervalo definido

    // 3. Limpieza: Devolver una función de limpieza para detener el temporizador 
    // cuando el componente se desmonte o el 'useEffect' se ejecute de nuevo.
    return () => clearInterval(intervalId);
  }, [AUTOPLAY_INTERVAL]); // Dependencia vacía para que se ejecute solo al montar.
                         // Se añade AUTOPLAY_INTERVAL por buena práctica, aunque sea una constante.

  return (
    <div className="relative w-full h-80 md:h-[600px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl" >
      {/* Slider */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="min-w-full" key={slide.id}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botones (se mantienen para control manual opcional) */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer"
      >
        &#10095;
      </button>
    </div>
  );
};