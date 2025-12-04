import { Logo_nav } from "./Logo_nav"
export const Narbar=()=>{
    return (
      <>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 
                 text-gray-600 font-medium w-full md:w-auto cursor-pointer">
            <li>
              <a href="/" className="text-[#A38363] hover:text-[#d28d47] transition duration-200">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A38363] transition duration-200">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A38363] transition duration-200">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A38363] transition duration-200">
                Contacto
              </a>
            </li>
            <li>
              <Logo_nav/>
            </li>
            
          </ul>
        </nav>
      </>
    );
}