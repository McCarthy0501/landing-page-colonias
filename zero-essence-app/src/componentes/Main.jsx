import { Boton } from "./botones/Boton"
//      <Boton clase={"bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"} text={"presiona"}/>

export const Main=({children})=>{
    return(<>
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-white shadow-md  text-[#292929]">
        {children}
    </main>
      
    </>)
}
