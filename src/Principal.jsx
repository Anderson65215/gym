
import React, { useState } from 'react';
import { App } from './App';
import { ContenedorCardsDieta } from './ContenedorTarjetaDieta';
import { ContenedorCardsEjercicios } from './ContenedorTarjetaEjercicos';
import { Seccion_ejercicios } from './Seccion_ejercicios';
import { Link } from "react-router-dom";
import { SedcionTienda } from './SedcionTienda';



function Menu() {
  const [showAlimentos, setShowAlimentos] = useState(false);
  const [showPrinc, setShowPrinc] = useState(true);
  const [showEjercicios, setShowEjercicios] = useState(false);
  const [showTienda, setShowTienda] = useState(false);



  // Agregado el estado para controlar la edición de alimentos

  const OpenAlimentos = () => {
    setShowAlimentos(true);
    setShowEjercicios(false);
    setShowPrinc(false);
    setShowTienda(false); // Asegurarse de ocultar la edición de alimentos
    document.body.style.overflow = 'hidden';
  }

  const OpenEjercicios = () => {
    setShowEjercicios(true);
    setShowTienda(false);
    setShowAlimentos(false);
    setShowPrinc(false);
    document.body.style.overflow = 'hidden';
  }

  const Vista = () => {
    setShowAlimentos(false);
    setShowTienda(false);
    setShowPrinc(true);
    setShowEjercicios(false);
    document.body.style.overflow = 'hidden';
  }

  const Opentienda = () => {
    setShowTienda(true);
    setShowAlimentos(false);
    setShowPrinc(false);
    setShowEjercicios(false);
    document.body.style.overflow = 'hidden';
  }


  return (
    <div>
      <div className="bg-[#0c1115] h-16 flex items-center justify-between p-4">
        <div className='flex justify-between items-center space-x-4'>
          <img className="w-24" src="/imagenes/Logo.jpg" alt="Logo" />
          <button onClick={Vista} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Inicio</button>
          <button onClick={OpenAlimentos} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Alimentos</button>
          <button onClick={OpenEjercicios} className="text-gray-300 hover.bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Ejercicios</button>
          <button onClick={Opentienda} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Tiendas</button>
        </div>
        <div>
          <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User Icon" />
          </button>
        </div>
      </div>
      {showPrinc && <Inicio />}
      {showAlimentos && <Alimentos />}
      {showEjercicios && <Ejercicios />}
      {showTienda && <Sedciontienda />}

    </div>
  );
}
function Sedciontienda() {
  return (
    
      <SedcionTienda />
    

  );

}

function Alimentos() {



  return (
    <div className="flex flex-col justify-center w-full items-center relative">
      <App />
      <div className="my-10 border border-black h-[45px] w-[80px] text-center py-2 rounded-[15px] dark:md:hover:bg-gray-200">
        <Link to="/EdicionDietas"><button>EDITAR</button></Link>
      </div>
    </div>


  );

}








function Ejercicios() {
  return (
    <div className='flex flex-col justify-center w-full items-center'>
      <Seccion_ejercicios />
      <div className="my-10 border border-black h-[45px] w-[80px] text-center py-2 rounded-[15px] dark:md:hover:bg-gray-200">
        <Link to="/EdicionRutinas"><button>EDITAR</button></Link>
      </div>
    </div>
  );
}






function Inicio() {



  return (
    <div className="Alimentos p-4">
      <div className="p-10 flex flex-wrap   justify-around items-center">
        <div className="bg-slate-100 p-10 rounded-2xl shadow-lg flex items-center min-w-min w-[30%] h-1/2">
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
        <div className='w-[50%] mb-11'>
          <ContenedorCardsDieta />
        </div>
        <div className="bg-slate-100 p-10 rounded-2xl shadow-lg flex items-center min-w-min w-[30%] h-1/2">

        </div>
        <div className='w-[50%] mb-11'>
          <ContenedorCardsEjercicios white="w-[70%]" />
        </div>
      </div>

    </div>
  );
}



export default Menu;


