//categorias_perfumes
import img1 from "../../../assets/img/categorias_perfumes/damas.webp";
import img2 from "../../../assets/img/categorias_perfumes/caballeros.webp";
import img3 from "../../../assets/img/categorias_perfumes/niños.webp";
import img4 from "../../../assets/img/categorias_perfumes/nuevas.webp";

//perfumes_damas
import chanelCinco from'../../../assets/img/perfumes/Damas/ChanelCinco.webp';
import black from'../../../assets/img/perfumes/Damas/BlackOpium.webp';
import vie from'../../../assets/img/perfumes/Damas/VieEstBelle.webp';
import god from'../../../assets/img/perfumes/Damas/GoodGrill.webp';


//perfumes_caballeros
import blue from '../../../assets/img/perfumes/Caballeros/BlueSeduccion.webp'
import dio from '../../../assets/img/perfumes/Caballeros/DiorSauvage.webp'
import paco from '../../../assets/img/perfumes/Caballeros/PacoRabanneUnMillion.webp'
import hugo from '../../../assets/img/perfumes/Caballeros/HugoBoss.webp'

//perfumes_niños




//perfumes_nuevos

  export const Categorias_perfumes = [
        {
          id: 1,
          nombre:"Damas",
           slug:"Dama",
           description:"Fragancias que elevan la feminidad y el poder.",
          image: img1,
        },
        {
          id: 2,
           nombre:"Caballeros",
           slug:"Caballero",

           description:"Aromas intensos y duraderos para el hombre moderno.",
          image: img2,
        },
        {
          id: 3,
           nombre:"Niños",
            slug:"Niños",
            description:"Suavidad y frescura. Fórmulas hipoalergénicas y seguras.",
          image: img3,
        },
        {
          id: 4,
           nombre:"Nuevas",
            slug:"Novedad",
            description:"Explora los últimos lanzamientos y las fragancias recién incorporadas a nuestro catálogo.",
          image: img4,
        },
        
      ];

  export const perfumes_dama = [
        {
          id: 1,
          nombre:"Chanel N°5",
           slug:"N°5",
           description:"El icónico perfume floral aldehídico. Notas de rosa, jazmín y sándalo.",
           image: chanelCinco,
           precio: 125.00,
           categoria: "Damas",
           marca: "Chanel",
           ml: 100,
           disponible: true
        },
        {
          id: 2,
           nombre:"Black Opium",
           slug:"black",
           description:"Fragancia oriental gourmand con notas de café, vainilla y ámbar.",
           image: black,
           precio: 95.00,
           categoria: "Damas",
           marca: "Yves Saint Laurent",
           ml: 90,
           disponible: true
        },
        {
          id: 3,
          nombre:"Vie Est Belle",
           slug:"vie",
           description:"Perfume floral con notas de iris, jazmín y patchouli.",
           image: vie,
           precio: 82.00,
           categoria: "Damas",
           marca: "Lancôme",
           ml: 100,
           disponible: true
        },
        {
          id: 4,
          nombre:"Good Girl",
           slug:"Good",
           description:"Fragancia oriental con notas de cacao, vainilla y jazmín.",
           image: god,
           precio: 78.00,
           categoria: "Damas",
           marca: "Carolina Herrera",
           ml: 80,
           disponible: true
        },
        
      ];

  export const perfumesCaballeros = [
        {
          id: 5,
          nombre:"Blue Seduction",
           slug:"Seduccion",
           description:"Aroma fresco y energético con notas marinas y menta.",
           image: blue,
           precio: 65.00,
           categoria: "Caballeros",
           marca: "Antonio Banderas",
           ml: 100,
           disponible: true
        },
        {
          id: 6,
           nombre:"Hugo Boss",
           slug:"Boss",
           description:"Fragancia aromática moderna con notas de manzana verde y madera.",
           image: hugo,
           precio: 72.00,
           categoria: "Caballeros",
           marca: "Hugo Boss",
           ml: 100,
           disponible: true
        },
        {
          id: 7,
          nombre:"Dior Sauvage",
           slug:"Sauvage",
           description:"Perfume fresco y especiado con bergamota y pimienta de Sichuan.",
           image: dio,
           precio: 110.00,
           categoria: "Caballeros",
           marca: "Dior",
           ml: 100,
           disponible: true
        },
        {
          id: 8,
          nombre:"1 Million",
           slug:"Un Million",
           description:"Fragancia oriental masculina con notas de oro, cuero y amberwood.",
           image: paco,
           precio: 98.00,
           categoria: "Caballeros",
           marca: "Paco Rabanne",
           ml: 100,
           disponible: true
        },
        
      ];
 export const perfumes_niños = [
        {
          id: 1,
          nombre:"Damas4",
           slug:"Colonia1.1",
           description:"Fragancias que elevan la feminidad y el poder.",
          image: img1,
        },
        {
          id: 2,
           nombre:"Caballeros",
           slug:"Colonia2.2",
           description:"Aromas intensos y duraderos para el hombre moderno.",
          image: img2,
        },
        {
          id: 3,
           nombre:"Niños",
            slug:"Colonia3.3",
            description:"Suavidad y frescura. Fórmulas hipoalergénicas y seguras.",
          image: img3,
        },
        {
          id: 4,
           nombre:"Nuevas",
            slug:"Colonia4.3",
            description:"Suavidad y frescura. Fórmulas hipoalergénicas y seguras.",
          image: img4,
        },
        
      ];
  export const perfumes_nuevos= [
        {
          id: 1,
          nombre:"Damas5",
           slug:"Colonia1.1",
           description:"Fragancias que elevan la feminidad y el poder.",
          image: img1,
        },
        {
          id: 2,
           nombre:"Caballeros",
           slug:"Colonia2.2",
           description:"Aromas intensos y duraderos para el hombre moderno.",
          image: img2,
        },
        {
          id: 3,
           nombre:"Niños",
            slug:"Colonia3.3",
            description:"Suavidad y frescura. Fórmulas hipoalergénicas y seguras.",
          image: img3,
        },
        {
          id: 4,
           nombre:"Nuevas",
            slug:"Colonia4.3",
            description:"Suavidad y frescura. Fórmulas hipoalergénicas y seguras.",
          image: img4,
        },
        
      ];

export const getTodosLosProductos = () => {
  return [...perfumes_dama, ...perfumesCaballeros];
};

export const getProductoPorId = (id) => {
  const productos = getTodosLosProductos();
  return productos.find(p => p.id === parseInt(id));
};

export const getProductosPorCategoria = (categoriaId) => {
  switch (categoriaId) {
    case 1:
      return perfumes_dama;
    case 2:
      return perfumesCaballeros;
    case 3:
      return perfumes_niños;
    case 4:
      return perfumes_nuevos;
    default:
      return [];
  }
};
