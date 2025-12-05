import { h1 } from "framer-motion/client";
import { Beneficios } from "./Beneficios";
import { Carrucel } from "./Carrucel";
import { Galeria } from "./productos/Galeria";

export const Hero=()=>{
       

    return(
    <>
    <Carrucel/>
    <Beneficios/>
    <Galeria/>
      
    </>)
}