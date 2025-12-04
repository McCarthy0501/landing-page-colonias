import "./App.css";
import { MainLayput } from "./componentes/MainLayaout";
import { Index } from "./pages/Inicio";
import { About } from "./pages/About";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <Routes >
        <Route element={<MainLayput/>}>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Route>
       </Routes>
      </div>
    </>
  );
}

export default App;
