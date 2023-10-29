import React, { useState } from "react";
import { TarjetaFiltro } from "./components/TarjetaFiltro";
import { TarjetaTienda } from "./components/TarjetaTienda";

export function SedcionTienda() {
  const productos = [
    {
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_870878-MCO71606544858_092023-O.webp",
      nombre: "Bi Pro, Proteina Bipro",
      sabor: "Chocolate",
      precio: "$149.900",
    },
    {
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_620492-MCO69210041447_052023-O.webp",
      nombre: "Smart Gainer 3.25 Lb",
      sabor: "gourmet vainilla.",
      precio: "$90.000",
    },
    {
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_878780-MCO71142709611_082023-O.webp",
      nombre: "100% Whey Total De Best",
      sabor: "Gourmet Vainilla",
      precio: "$219.900",
    },

    {
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_626403-MCO49173651262_022022-O.webp",
      nombre: "Proteína De 10 Libras",
      sabor: "Frutos Tropicales",
      precio: "$204.900",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-black to-purple-400 my-5 pl-[200px]">
          PRODUCTOS RECOMENDADOS
        </h1>
        <div className="flex justify-center w-full ">
          <div className=" m-5 ">
            <TarjetaFiltro />
          </div>

          <div className="flex flex-wrap justify-center w-2/4 items-center">
            {productos.map((producto, index) =>
              TarjetaTienda(
                producto.imagen,
                producto.nombre,
                producto.sabor,
                producto.precio
              )
            )}
            {productos.map((producto, index) =>
              TarjetaTienda(
                producto.imagen,
                producto.nombre,
                producto.sabor,
                producto.precio
              )
            )}
            {productos.map((producto, index) =>
              TarjetaTienda(
                producto.imagen,
                producto.nombre,
                producto.sabor,
                producto.precio
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
