import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Redes_foo=()=>{
    return(
    <>
    <div class="mt-4 flex justify-start space-x-6">
  
    {/* Ícono 1: Instagram */}
    <a 
      href="https://instagram.com/zeroessence" 
      target="_blank" 
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-[#d28d47] transition duration-200"
    >
      <FaInstagram className="w-6 h-6" />
    </a>
    
    {/* Ícono 2: Facebook */}
    <a 
      href="https://facebook.com/zeroessence" 
      target="_blank" 
      rel="noopener noreferrer"
      class="text-gray-400  hover:text-[#d28d47] transition duration-200"
    >
      <FaFacebook className="w-6 h-6" />
    </a>
    
    {/* Ícono 3: Twitter (X) */}
    <a 
      href="https://twitter.com/zeroessence" 
      target="_blank" 
      rel="noopener noreferrer"
      class="text-gray-400  hover:text-[#d28d47] transition duration-200"
    >
      <FaTiktok className="w-6 h-6" />
    </a>
    
</div>

    </>)
}