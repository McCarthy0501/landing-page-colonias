import { 
    Categorias_perfumes,
    perfumes_dama,perfumesCaballeros,
    perfumes_niños,
    perfumes_nuevos } from "../products";



export const filtrarPorCategorias = (idCategoria) => {
    

    if (idCategoria === 1) {
        console.log("Retornando perfumes de dama...");
        
        return perfumes_dama;
    } else if (idCategoria === 2) {
        console.log("Retornando perfumes de caballeros...");
        return perfumesCaballeros;
    } else if (idCategoria === 3) {
        console.log("Retornando perfumes de niños...");
        return perfumes_niños;
    } else if (idCategoria === 4) {
        console.log("Retornando perfumes nuevos...");
        return perfumes_nuevos;
    } else {
      
        console.log(`Error: ID de categoría no válido: ${idCategoria}`);
        return []; 
    }
};


export const filtrarNombre=(idCategoria)=>{
  if (idCategoria === 1) {
        console.log("Retornando perfumes de dama...");
        
        return Categorias_perfumes[0].nombre;
    } else if (idCategoria === 2) {
        console.log("Retornando perfumes de caballeros...");
        return Categorias_perfumes[1].nombre;
    } else if (idCategoria === 3) {
        console.log("Retornando perfumes de niños...");
        return Categorias_perfumes[2].nombre;
    } else if (idCategoria === 4) {
        console.log("Retornando perfumes nuevos...");
        return Categorias_perfumes[3].nombre;
    } else {
      
        console.log(`Error: ID de nombre no válido: ${idCategoria}`);
        return []; 
    }

}