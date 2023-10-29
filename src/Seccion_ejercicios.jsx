
import { Ejercicios } from "./components/Ejercicios";
import { ContenedorCardsEjercicios } from "./ContenedorTarjetaEjercicos";

export function Seccion_ejercicios() {

    return (
        <>
            <div className=" mt-14 flex justify-center items-center gap-2 mb-32 ">
                <img src="src/assets/cubiertos.svg" alt="" className="w-14" />
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-400">
                    Ejercicios
                </h1>
            </div>
            <div className="flex flex-col justify-center w-full items-center">
                <ContenedorCardsEjercicios white="w-[40%]" />

            </div>

        </>
    );
}

export default Seccion_ejercicios;