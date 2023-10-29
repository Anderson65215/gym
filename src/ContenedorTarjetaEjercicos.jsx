import React, { useState } from "react";

import { Ejercicios } from "./components/Ejercicios"; 
export function ContenedorCardsEjercicios({white}) {
    const w =white
    
    const ejercicios = Array(4).fill({
        imagen:
            "https://keifit.com/wp-content/uploads/2018/01/rutina-pierna-Why-Reverse-Lunges-Are-Better-Than-Forward-Lunges-STACK.jpg",
        Nombre: "Pierna",

    });

    return (
        <div className="flex flex-col justify-center w-full items-center ">
            <div className={`${w} max-h-96  rounded-lg shadow-[0px_0px_20px_1px_rgba(0,0,0,0.5)] py-10 px-16 overflow-auto`}>
                <div className="flex justify-between font-bold px-7 text-center ">
                    <p className="w-[120px]">IMAGEN</p>
                    <p className="w-[120px]">NOMBRE</p>
                </div>
                {ejercicios.map((card, index) => (
                    <Ejercicios
                        key={index}
                        imagen={card.imagen}
                        Nombre={card.Nombre}
                    />
                ))}
            </div>

        </div>
    );
}