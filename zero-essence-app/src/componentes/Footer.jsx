import { Logo_foo } from "./footerComponents/Logo_foo";
import { Narbar } from "./headerComponents/Narbar";
import { Redes_foo } from "./footerComponents/RedesFooter";
export const Footer=()=>{
    return(<>
      <footer className="bg-[#33363A] shadow-md p-4">
            <div className="flex flex-col md:flex-row md:justify-around md:items-center max-w-7xl mx-auto">
              <Logo_foo/> 
               <Narbar text1={"Ayuda"} 
                      text2={"Dudas"} 
                      text3={"La Mejor Calidad"} 
                      text4={"todos los derechos reservados"}
                      />
                      

                    
              <Redes_foo/>
            </div>
              
      
            </footer>
            
    </>)
}