import { h1 } from "framer-motion/client";
import { Beneficios } from "./Beneficios";
import { Carrucel } from "./Carrucel";
import { Galeria } from "./productos/Galeria";
import { motion } from "framer-motion";
import { fadeUp,fadeDown,fadeLef,fadeRight } from "../animaciones/animaciones";

export const Hero=()=>{
       

    return(
    <>
      <motion.div
        variants={fadeUp}
        initial="desaparece"
        whileInView="aparece"
        // Aparece casi inmediatamente al cargar (viewport: 0.1)
        viewport={{ once: true, amount: 0.1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} // Sin delay
        className="w-full"
    >
         <Carrucel/>
    </motion.div>

     <motion.div
        variants={fadeRight}
        initial="desaparece"
        whileInView="aparece"
        // Aparece casi inmediatamente al cargar (viewport: 0.1)
       viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} // Pequeño delay
        className="w-full"
    >
        <Beneficios/>
    </motion.div>
   
     <motion.div
        variants={fadeLef}
        initial="desaparece"
        whileInView="aparece"
        // Aparece casi inmediatamente al cargar (viewport: 0.1)
         viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Sigue el flujo
        className="w-full"
    >
         <Galeria/>
    </motion.div>
    
   
      
    </>)
}