import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Inicio() {
    return (
        <div>
            <header class ="relative ">
                <nav class="bg-white flex justify-between items-center fixed w-full z-40">
                    <div>
                        <img class="w-60" src="/public/imagenes/logoblanco.jpeg"/>
                    </div>
                    <div class="contenedor-botones">
                        <button class="mr-3 rounded-full border border-black px-2 py-2 transition font-medium hover:border-purple-700  hover:bg-purple-700 hover:text-white">Iniciar sesion</button>
                        <button class="mr-6 rounded-full border  border-black px-2 py-2 transition font-medium hover:border-purple-700  hover:bg-purple-700 hover:text-white">Registrarse</button>
                    </div>
                </nav>
            </header>
            <section class ="h-screen w-full flex">
                <div class="bg-[url('/public/imagenes/Fondo-1.jpg')] h-full w-full bg-no-repeat bg-cover flex justify-center items-center ">
                    <h1 class="text-center text-white z-20 text-8xl w-3/5 font-bold">¡TRANSFORMA TU VIDA CON <span class="bg-clip-text text-transparent bg-gradient-to-tr from-black to-purple-700  ">FITZESTPRO</span>!</h1>
                </div>
                <div class="bg-black/50 h-screen w-full absolute z-10 ">  </div>
            </section>
        </div>
    )
}

root.render(<div>
    <Inicio />
</div>);

