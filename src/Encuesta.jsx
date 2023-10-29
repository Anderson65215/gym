
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Encuesta() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [camposHabilitados, setCamposHabilitados] = useState(false);

    const handleChange = (event) => {
        const opcion = event.target.value;
        setOpcionSeleccionada(opcion);
        setCamposHabilitados(opcion === 'si');
    };

    return (
        <div>
            <main class="bg-white h-screen w-screen flex flex-col  items-center">
                <div>
                    <img src="/public/imagenes/logoblanco.jpeg" />
                </div>
                <div class="bg-purple-800 h-[60%] w-[55%] rounded-[30px] border-black border-[1px] flex justify-between flex-col items-center align-middle">



                    <div class="flex justify-center h-[80%] w-[100%]">

                        <div class="border-b border-gray-900/10 pb-12 pl-7">

                            <div class="ml- mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7 ">
                                <div class="sm:col-span-3 ">
                                    <label for="nombre" class="block text-sm  text-white text-2x1 font-semibold leading-6 ">Nombre</label>
                                    <div class="mt-2">
                                        <input type="text" name="nombre" id="nombre" autocomplete="given-name" class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="apellido" class="block text-sm  text-white text-2x1 font-semibold leading-6 ">Apellido</label>
                                    <div class="mt-2">
                                        <input type="text" name="apellido" id="apellido" autocomplete="family-name" class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="fecha-nacimiento" class="block text-sm  leading-6  text-white text-2x1 font-semibold">Fecha de Nacimiento</label>
                                    <div class="mt-2">
                                        <input id="fecha-nacimiento" name="fecha-nacimiento" type="date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>


                                <div class="sm:col-span-3">
                                    <label for="gender" class="block text-sm  leading-6  text-white text-2x1 font-semibold">Género</label>
                                    <div class="mt-2">
                                        <select id="gender" name="gender" autocomplete="sex" class="block w-[12rem] rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            <option value="" selected disabled>Selecciona una opción</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="femenino">Femenino</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="altura" class="block text-sm  leading-6  text-white text-2x1 font-semibold ">Altura (cm)</label>
                                    <div class="mt-2">
                                        <input type="number" name="altura" id="altura" autocomplete="height" class="block w-44 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" min="120" max="250" pattern="[0-9]*" title="Ingresa un número válido entre 120 y 250" />
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="peso" class="block text-sm  text-white text-2x1 font-semibold leading-6 ">Peso</label>
                                    <div class="mt-2">
                                        <input type="number" name="peso" id="peso" autocomplete="weight" class="block w-44 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" step="0.1" pattern="[0-9]+([.][0-9]+)?" title="Ingresa un número válido" />
                                    </div>
                                </div>

                                <div class="col-span-full">
                                    <label for="actividad" class="block text-sm  text-white text-2x1 font-semibold leading-6 ">Actividad</label>
                                    <div class="mt-2">
                                        <select id="actividad" name="actividad" autocomplete="off" class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option value="" selected disabled>Seleccione una opción</option>
                                            <option value="poco-ejercicio">Poco ejercicio (1-3 días a la semana)</option>
                                            <option value="promedio">Promedio (4-5 días a la semana)</option>
                                            <option value="mucho-ejercicio">Mucho ejercicio (6-7 días a la semana)</option>
                                        </select>
                                    </div>
                                </div>






                            </div>
                        </div>

                        <div class="h-full ml-20 mr-12  border-black border-2">
                        </div>


                        <div class="h-1/2 w-1/2 flex justify-center">
                            <div class="border-b border-gray-900/10 pb-12 pl-7">

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="objetivo" class="block text-sm leading-6  text-white text-2x1 font-semibold">¿Cuál es tu objetivo a conseguir?</label>
                                        <div class="mt-2">
                                            <select id="objetivo" name="objetivo" autocomplete="off" class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <option value="" selected disabled>Selecciona una opción</option>
                                                <option value="aumentar-masa-muscular">Aumentar masa muscular</option>
                                                <option value="bajar-de-peso">Bajar de peso</option>
                                                <option value="mejorar-actitud-fisica">Mejorar actitud física y estética</option>
                                            </select>
                                        </div>
                                    </div>



                                    <div className="sm:col-span-4">
                                        <label htmlFor="usasuplemento" className="block text-sm  leading-6  text-white text-2x1 font-semibold">
                                            ¿Estás tomando actualmente algún suplemento alimenticio?
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="usasuplemento"
                                                name="usasuplemento"
                                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                value={opcionSeleccionada}
                                                onChange={handleChange}>
                                                <option value="">Selecciona una opción</option>
                                                <option value="si">Sí</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-5">
                                        <label htmlFor="caloriasSuplemento" className="pl-2 block  leading-6 text-white  font-semibold">
                                            Calorías del suplemento
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="caloriasSuplemento"
                                                id="caloriasSuplemento"
                                                autoComplete="off"
                                                className="pl-2 block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                disabled={!camposHabilitados}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="proteinaSuplemento" className="pl-2 block text-sm  leading-6  text-white text-2x1 font-semibold">
                                            Proteína del suplemento
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="proteinaSuplemento"
                                                id="proteinaSuplemento"
                                                autoComplete="off"
                                                className="pl-2 block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                disabled={!camposHabilitados}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[20%] w-full flex justify-center items-center">

                    <Link to="/Principal"><div class="flex justify-center items-center">
                            <button type="submit" class="text-center flex w-[10rem] justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold leading-6 text-black border-gray-400 border-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 hover:transition-all transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Crear cuenta</button>
                        </div></Link>

                    </div>
                </div>
            </main>
        </div>
    )



}

export default Encuesta;