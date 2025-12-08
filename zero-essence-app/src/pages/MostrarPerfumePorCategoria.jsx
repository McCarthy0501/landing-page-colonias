import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Categorias_perfumes } from "../componentes/mainComponets/productos/products";
import { perfumes_dama,perfumesCaballeros,perfumes_niños,perfumes_nuevos } from "../componentes/mainComponets/productos/products";
import { Tarjeta } from "../componentes/mainComponets/productos/Tarjeta";
import { filtrarPorCategorias,filtrarNombre } from "../componentes/mainComponets/productos/logic/filtros";
import { motion } from "framer-motion";
import { fadeRight } from "../componentes/animaciones/animaciones";
export const MostrarPerfumePorCategoria=()=>{
    const {id}=useParams();//tomo el id de la url
   const categoriaId = parseInt(id); //paso la id a entero
   const productosFiltrados=filtrarPorCategorias(categoriaId); //llamo la funcion que hice
   const nombreFiltrado=filtrarNombre(categoriaId);//llamo a la funcion de filtro de nombre


   if (!productosFiltrados || productosFiltrados.length === 0) {
        return (
            <h1 className="text-2xl text-red-500 font-bold p-10">
                ⚠️ Categoría no encontrada o sin productos.
            </h1>
        );
    }
    
    return(<>
    <motion.div
        variants={fadeRight}
        initial="desaparece"
        whileInView="aparece"
        // Aparece casi inmediatamente al cargar (viewport: 0.1)
         viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Sigue el flujo
        className="w-full"
    >
        <h1 className="text-3xl font-bold mb-6">
                 {nombreFiltrado}
            </h1>
            
            {/* 4. Mapear sobre los productos filtrados, NO sobre Categorias_perfumes */}
            <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productosFiltrados.map((producto) => (
                    <Tarjeta key={producto.id} products={producto}/>
                ))}
            </div>
    </motion.div>
        </>
    )
    
}