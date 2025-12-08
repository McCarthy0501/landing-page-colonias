
import { Tarjeta } from "./Tarjeta";
import { Categorias_perfumes } from "./products";
import { useNavigate } from "react-router-dom";


export const Galeria=()=>{
    const navegar=useNavigate();
    const ir= (id)=>{
        navegar(`/mostrarperfumeporcategoria/${id}`)
    }
    
    return(<>
    {Categorias_perfumes.length > 0 ? (
                 <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
                 >
                    {Categorias_perfumes.map((c)=>(
                        <Tarjeta key={c.id} products={c} navegador={()=>{ir(c.id)}}
                       />
                        
                    ))}
                   
                   
                 </div>
                 
            ):(<p className="text-gray-700 text-lg font-semibold animate-pulse">Cargando Fragancias </p>)}
        

    </>)
}