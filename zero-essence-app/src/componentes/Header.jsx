import { useState } from "react";
import { Narbar } from "./headerComponents/Narbar"
import { Logo } from "./headerComponents/Logo"
import { Logo_nav } from "./headerComponents/Logo_nav"
import { Carrito } from "./Carrito";
import { useCarrito } from "../context/CarritoContext";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Header=()=>{
  const { totalItems, setIsCarritoOpen } = useCarrito();
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex-shrink-0">
                <Logo/> 
              </Link>
              
              <button 
                className="md:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
            
            <div className={`${menuOpen ? 'block' : 'hidden'} md:block`}>
              <Narbar 
                text1={"inicio"} 
                text2={"Productos"} 
                text3={"Nosotros"} 
                text4={"Contacto"} 
                comp={
                  <button 
                    onClick={() => setIsCarritoOpen(true)}
                    className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FiShoppingCart size={24} className="text-gray-700" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#A38363] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                        {totalItems}
                      </span>
                    )}
                  </button>
                }
                address1="/"
                address2="/productos"
                address3="/about"
                address4="/contacto"
              />
            </div>
          </div>
        </div>
      </header>
      <Carrito/>
    </>)
}