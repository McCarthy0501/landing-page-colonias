import { Narbar } from "./headerComponents/Narbar"
import { Logo } from "./headerComponents/Logo"
import { Logo_nav } from "./headerComponents/Logo_nav"
export const Header=()=>{
    return(<>
    <header className="bg-white shadow-md p-4">
      <div className="flex flex-col md:flex-row md:justify-around md:items-center max-w-7xl mx-auto">
        <Logo/> 
        <Narbar text1={"inicio"} 
        text2={"Productos"} 
        text3={"Nosotros"} 
        text4={"Contacto"} 
        comp={<Logo_nav/>}
        address1="/"
        address2="/productos"
        address3="/about"
        address4="contacto"
        />
      </div>
        

      </header>
      
    </>)
}