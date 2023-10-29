
import { Header } from "./components/header";
import { Cards } from "./components/Cards";
import { TarjetaTienda } from "./components/Tienda";
import { ContenedorCardsDieta } from "./ContenedorTarjetaDieta";

export function App() {

  return (
    <>
      <div className=" mt-14 flex justify-center items-center gap-2 mb-32">
        <img src="src/assets/cubiertos.svg" alt="" className="w-14" />
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-400">
          RECETAS
        </h1>
      </div>
      <div className="flex flex-col justify-center w-full items-center">
        <ContenedorCardsDieta />

      </div>
      
    </>
  );
}

export default App;

