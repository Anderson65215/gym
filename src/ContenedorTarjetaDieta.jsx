import React, { useState } from "react";

import { Cards } from "./components/Cards";
export function ContenedorCardsDieta() {
    const cards = Array(4).fill({
        imagen:
            "https://cdn0.recetasgratis.net/es/posts/9/2/7/salteado_de_pollo_con_verduras_32729_orig.jpg",
        Nombre: "Pollo a la parrilla con ensalada",
        calorias: "500",
    });

    return (
        <div className="flex flex-col justify-center w-full items-center ">
            <div className="w-[70%] max-h-96  rounded-lg shadow-[0px_0px_20px_1px_rgba(0,0,0,0.5)] py-10 px-16 overflow-auto">
                <div className="flex justify-between font-bold px-7 text-center">
                    <p className="w-[120px]">IMAGEN</p>
                    <p className="w-[120px]">NOMBRE</p>
                    <p className="w-[120px]">CALORIAS</p>
                </div>
                {cards.map((card, index) => (
                    <Cards
                        key={index}
                        imagen={card.imagen}
                        Nombre={card.Nombre}
                        calorias={card.calorias}
                    />
                ))}
            </div>

        </div>
    );
}