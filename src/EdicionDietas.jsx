import React, { useState } from 'react';
import { Link } from "react-router-dom";


export function EdicionDietas() {
    return (
        <div class="p-8 flex flex-col justify-center ">
            <div className=" mt-36 flex justify-center items-center gap-2">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#7144EF]">
                    EDICION DE RECETAS
                </h1>
            </div>
            <div className="p-10 grid grid-cols-2 gap-24">
                <div className="bg-slate-100 rounded-2xl shadow-2xl p-4">
                    <div className="flex items-center p-4">
                        <label for="receta" className="font-medium mr-2">Nombre de la Receta:</label>
                        <input type="text" className="block w-3/4 p-2 rounded-full border-0 py-1 text-gray-900 ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="flex items-center justify-center p-3">
                        <label for="cantidad" className="font-medium p-1">Cantidad:</label>
                        <input type="text" id="cantidad" className="block w-16 rounded-full border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6" />
                        <label for="porciones" className="ml-2 p-1 font-medium">porciones de:</label>
                        <select id="porciones" className="block rounded-full w-12 border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center p-3">
                        <label for="queComida" className="font-medium p-1">Que comida:</label>
                        <select type="text" id="queComida" className="block w-3/4 rounded-md border-0 py-1 text-gray-900 ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6">
                            <option>Arroz</option>
                            <option>Yuca</option>
                            <option>Papa</option>
                        </select>
                    </div>
                    <hr className="border-t-2 border-black-500 my-6" />
                    <label>Calorias Totales: 193g</label>
                    <button className="ml-5 mr-3 rounded-full border border-black px-2 py-2 transition font-medium hover:border-purple-700 hover:bg-purple-700 hover:text-white">Eliminar</button>
                    <button className="rounded-full border border-black px-2 py-2 transition font-medium hover:border-purple-700 hover:bg-purple-700 hover:text-white">Confirmar</button>
                </div>
                <div className="bg-slate-100 p-16 py-22 rounded-2xl shadow-2xl">
                    <p className="text-center text-[25px] text-[#080808]">Calorias aceptadas en el dia : 2410 gr</p>
                    <hr className="border-t-2 border-black-500 my-6" />
                    <p className="text-center text-[25px] text-[#080808]">Alimentos</p>
                    <div class=" flex items-center justify-center">
                        <table class=" table-auto">
                            <thead>
                                <tr class="px-4 py-2" >
                                    <th >Nombre</th>
                                    <th >Calorías</th>
                                    <th >Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-4 py-2">Alimento 1</td>
                                    <td class="px-4 py-2">100</td>
                                    <td class="px-4 py-2"><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2">Alimento 2</td>
                                    <td class="px-4 py-2">200</td>
                                    <td class="px-4 py-2"><input type="checkbox" /></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <button className="rounded-full border border-black px-3 py-2 transition font-medium hover:border-purple-700 hover:bg-purple-700 hover:text-white">Agregar</button>
                </div>
        


            </div>
            <div className='flex justify-center items-center w-full'>
                    <Link to="/Principal"><button class="text-center flex w-[20rem] justify-center rounded-md border-black border-[1px] hover:border-purple-700 bg-white px-3 py-2 text-sm font-semibold leading-6 text-black hover:text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 hover:transition-all transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Regresar</button></Link>
                </div>

        </div>
    );
}