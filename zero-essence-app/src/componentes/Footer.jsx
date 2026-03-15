import { Logo_foo } from "./footerComponents/Logo_foo";
import { Redes_foo } from "./footerComponents/RedesFooter";
import { Link } from "react-router-dom";

export const Footer=()=>{
    return(
      <footer className="bg-[#33363A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <Logo_foo/>
              <p className="mt-4 text-gray-400 text-sm">
                Tu destino para encontrar las mejores fragancias. 
                Calidad garantizada en cada compra.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-[#A38363] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/productos" className="text-gray-400 hover:text-[#A38363] transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-[#A38363] transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-gray-400 hover:text-[#A38363] transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <Redes_foo/>
              <p className="mt-4 text-gray-400 text-sm">
                Horario: Lun-Sáb 9am-8pm
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Zero Essence. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
}