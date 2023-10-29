import "./App.css";
import { Ejercicios } from "./components/Ejercicios";

export function Rutinas(){
    const ejerc = Array(3).fill({
        imagen:
        "https://keifit.com/wp-content/uploads/2018/01/rutina-pierna-Why-Reverse-Lunges-Are-Better-Than-Forward-Lunges-STACK.jpg",
        Nombre: "Pierna"
    });
    return(
        <div>
            <div className=" mt-14 flex justify-center items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/83/83753.png" alt="" className="w-14" />
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#7144EF]">
                RUTINAS
                </h1>
            </div>
            <div className="flex flex-col justify-center w-full items-center">
                <div className="w-1/2  max-h-96 mt-32 rounded-2xl shadow-[0px_0px_20px_1px_rgba(0,0,0,0.5)] py-10 px-16 overflow-auto">
                    <div className="flex justify-between font-bold px-7 text-center">
                        <p className="w-[120px]">IMAGEN</p>
                        <p className="w-[120px]">NOMBRE</p>
                    </div>
                    {ejerc.map((ejer, index) => (
                        <Ejercicios
                        key={index}
                        imagen={ejer.imagen}
                        Nombre={ejer.Nombre}
                        />
                    ))}
                </div>
                <div className="my-10 border border-black h-[45px] w-[80px] text-center py-2 rounded-[15px] dark:md:hover:bg-gray-200">
                    <button>EDITAR</button>
                </div>
            </div>
            </div>
    )
}