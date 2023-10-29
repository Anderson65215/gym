
import { Ejercicios } from "./components/Ejercicios";
import { Link } from "react-router-dom";

export function EdicionRutinas() {
    const ejerc = Array(3).fill({
        imagen:
            "https://keifit.com/wp-content/uploads/2018/01/rutina-pierna-Why-Reverse-Lunges-Are-Better-Than-Forward-Lunges-STACK.jpg",
        Nombre: "Pierna"
    });
    return (
        <div class="p-8 flex flex-col justify-center">
            <div className=" mt-14 flex justify-center items-center gap-2">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#7144EF]">
                    EDICION DE RUTINAS
                </h1>
            </div>
            <div className=" p-10 grid grid-cols-2 gap-24">
                <div className="bg-slate-100 rounded-2xl shadow-2xl p-8">
                    <div className="flex items-center justify-center p-3">
                        <label for="nombreRutina" className="font-medium p-1">Nombre de la Rutina:</label>
                        <input
                            type="text"
                            id="nombreRutina"
                            className="block w-3/4 p-2 rounded-full border-0 py-1 text-gray-900 ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="flex items-center  p-3">
                        <label for="NumeroDeRepeticiones" className="font-medium p-1">Numero de repeticiones</label>
                        <select
                            id="NumeroDeRepeticiones"
                            className="block  rounded-full w-20 border-0 py-1 mr-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                        >
                            <option value="8">15</option>
                            <option value="10">30</option>
                            <option value="15">45</option>
                        </select>
                        <label for="diaEntrenamiento" className="ml-2 p-1 font-medium">Día de Entrenamiento:<br />  Lunes</label>

                    </div>

                    <div className="flex items-center  p-3">
                        <label for="Peso(KG)" className="font-medium p-1">Peso(KG):</label>
                        <input type="text" id="Peso(KG)" className="block w-32 p-2 rounded-full border-0 py-1 text-gray-900 ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 mr-16" />
                        <label for="Tiempodeentrenamiento" className="mr-10 ml-2 p-1 font-medium">tiempo de descanso:<br />  15s</label>
                        <button className="mr-6 rounded-full border border-black px-2 py-2 transition font-medium hover:border-purple-700 hover:bg-purple-700 hover:text-white">Confirmar</button>
                        <button className="rounded-full border border-black px-2 py-2 transition font-medium hover:border-purple-700 hover:bg-purple-700 hover:text-white">Eliminar</button>


                    </div>
                    <div className="m-9 h-72" style={{ overflow: 'auto' }}>
                        <div className="flex justify-between font-bold px-16 text-center">
                            <p>IMAGEN</p>
                            <p>NOMBRE</p>
                        </div>
                        {ejerc.map((ejer, index) => (
                            <div key={index} className="flex justify-center">
                                <Ejercicios
                                    key={index}
                                    imagen={ejer.imagen}
                                    Nombre={ejer.Nombre}
                                />
                            </div>
                        ))}
                    </div>





                </div>
                <div className="bg-slate-100 p-16 py-22 rounded-2xl shadow-2xl">
                    <p className="text-center text-[25px] text-[#080808]">Ejercicios</p>

                    <div className="flex justify-between font-bold px-16 text-center">
                        <p>IMAGEN</p>
                        <p>NOMBRE</p>
                    </div>

                    {ejerc.map((ejer, index) => (
                        <div key={index} className="flex justify-evenly">
                            <Ejercicios
                                key={index}
                                imagen={ejer.imagen}
                                Nombre={ejer.Nombre}
                            />
                            <input
                                type="checkbox"
                                name={`checkbox-${index}`}
                                id={`checkbox-${index}`}
                            />
                        </div>
                    ))}



                </div>

            </div>
            <div className='flex justify-center items-center w-full'>
                <Link to="/Principal"><button class="text-center flex w-[20rem] justify-center rounded-md border-black border-[1px] hover:border-purple-700 bg-white px-3 py-2 text-sm font-semibold leading-6 text-black hover:text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 hover:transition-all transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Regresar</button></Link>
            </div>
        </div>
    );
}