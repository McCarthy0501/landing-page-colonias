import { Logo_foo } from "./footerComponents/Logo_foo";
import { Narbar } from "./headerComponents/Narbar";
export const Footer=()=>{
    return(<>
      <footer className="bg-[#33363A] shadow-md p-4">
            <div className="flex flex-col md:flex-row md:justify-around md:items-center max-w-7xl mx-auto">
              <Logo_foo/> 
              <Narbar/>
            </div>
              
      
            </footer>
            
    </>)
}