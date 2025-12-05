
import { Tarjeta } from "./Tarjeta";
import { products } from "./products";


export const Galeria=()=>{
    
    return(<>
    {products.length > 0 ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                 >
                    {products.map((p)=>(
                        <Tarjeta key={p.id} products={p} 
                       />
                        
                    ))}
                   
                   
                 </div>
                 
            ):(<p className="text-gray-700 text-lg font-semibold animate-pulse">Cargando Categorias</p>)}
        

    </>)
}