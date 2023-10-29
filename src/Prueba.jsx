
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';



function Menu() {
  const [showAlimentos, setShowAlimentos] = useState(false);
  const handleClick = () => {
    setShowAlimentos(true);
    setShowPrinc(false);
    document.body.style.overflow = 'hidden';
  }
  const [showPrinc, setShowPrinc] = useState(false);

  const Vista = () => {
    setShowAlimentos(false); 
    setShowPrinc(true);

    document.body.style.overflow = 'hidden';
  }

  return (
    <div>
      
      <div class="bg-[#0c1115] h-16  flex items-center justify-between p-4">
        <img class="w-24" src="public\imagenes\Logo.jpg"></img>
        
        <div className='ml-10 flex items-baseline space-x-4'>
        <button onClick={Vista} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-9 py-2 text-base font-medium">Inicio</button>
          <button onClick={handleClick}class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Alimentos</button>
          <button class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Ejercicios</button>
          <button class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Tiendas</button>
        </div>
        
        <button> </button>
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">   
          <img class="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt=""></img>
        </button>
        
        
      </div>
      {showPrinc && < Inicio/>}
      {showAlimentos && <Alimentos />}
    </div>
  );
}

function Alimentos() {
  
  return (
    //va lo de cristian
    <div className="pagina flex items-center justify-center min-h-screen">
      <div className="contenido bg-slate-100 p-16 py-22 rounded-2xl shadow-lg">
        <h3>info....</h3>
      </div>
      <button class="border rounded-full p-4">  EDitar  </button>
    </div>
  );
}

function Inicio(){



  return (
    <div className="Alimentos p-14">
      <div className="p-10 grid grid-cols-2 gap-24">
        <div className="bg-slate-100 p-10 rounded-2xl shadow-lg flex items-center min-w-min">
          <img
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full mr-4"
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            alt=""
          />
          <div className='pl-4'>
            <h1 className="text-2xl font-bold">Usuario</h1>
            <h1 className="text-lg text-gray-600">Sexo</h1>
            <h1 className="text-lg text-gray-600">Peso</h1>
            <h1 className="text-lg text-gray-600">Altura</h1>
            <h1 className="text-lg text-gray-600">....</h1>
          </div>
        </div>
        <div className="bg-slate-100 p-16 py-22 rounded-2xl shadow-lg">
          
        </div>
        <div className="bg-slate-100 p-16 py-22 rounded-2xl shadow-lg">03</div>
        <div className="bg-slate-100 p-16 py-22 rounded-2xl shadow-lg">04</div>
      </div>
    </div>
  );
}


function EdicionDietas() {

  return (
    <div class="p-8">
      <div className="w-[622px] h-[54px] relative">
        <div className="w-full h-full absolute top-0 left-0 text-transparent font-extrabold text-[48px] text-center leading-[60px] whitespace-nowrap">
          <span className="bg-gradient-to-r from-black to-[#7144EF] bg-clip-text text-transparent">
            Edicion de Recetas
          </span>
        </div>
      </div>
      <div className="p-10 grid grid-cols-2 gap-24">
        <div className="bg-slate-100 rounded-2xl shadow-lg p-4">
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
        <div className="bg-slate-100 p-16 py-22 rounded-2xl shadow-lg">
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
                  <td class="px-4 py-2"><input type="checkbox"/></td>
                </tr>
                <tr>
                  <td class="px-4 py-2">Alimento 2</td>
                  <td class="px-4 py-2">200</td>
                  <td class="px-4 py-2"><input type="checkbox"/></td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <button className="rounded-full border border-black px-3 py-2 transition font-medium hover:border-purple-700 hover:bg-purple-700 hover:text-white">Tu Botón</button>
        </div>
      
      </div>
    </div>
  );
}


export default Menu;


