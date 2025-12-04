import { Narbar } from "./headerComponents/Narbar"
import { Logo } from "./headerComponents/Logo"
export const Header=()=>{
    return(<>
    <header className="bg-white shadow-md p-4">
      <div className="flex flex-col md:flex-row md:justify-around md:items-center max-w-7xl mx-auto">
        <Logo/> 
        <Narbar/>
      </div>
        

      </header>
      
    </>)
}