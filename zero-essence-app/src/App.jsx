import "./App.css";
import { MainLayput } from "./componentes/MainLayaout";
import { Index } from "./pages/Inicio";
import { About } from "./pages/About";
import { Contacto } from "./pages/Contacto";
import { Productos } from "./pages/Productos";
import { Routes, Route } from 'react-router-dom';
import { MostrarPerfumePorCategoria } from "./pages/MostrarPerfumePorCategoria";
function App() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <Routes >
        <Route element={<MainLayput/>}>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/productos" element={<Productos/>}></Route>
          <Route path="/mostrarperfumeporcategoria/:id" element={<MostrarPerfumePorCategoria/>}></Route>
        </Route>
       </Routes>
      </div>
    </>
  );
}

export default App;
