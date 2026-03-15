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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <motion.div
        variants={fadeRight}
        initial="desaparece"
        whileInView="aparece"
         viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full"
    >
        <h1 className="text-3xl font-bold mb-6">
                 {nombreFiltrado}
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productosFiltrados.map((producto) => (
                    <Tarjeta key={producto.id} products={producto}/>
                ))}
            </div>
    </motion.div>
    </div>
        </>
    )
    
}