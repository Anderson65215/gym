import "./App.css";
import { Cards } from "./components/Cards";

export function Alimentos() {
    const cards = Array(4).fill({
        imagen:
        "https://cdn0.recetasgratis.net/es/posts/9/2/7/salteado_de_pollo_con_verduras_32729_orig.jpg",
        Nombre: "Pollo a la parrilla con ensalada",
        calorias: "500",
    });
    return (
        <div>
            <div className=" mt-14 flex justify-center items-center gap-2">
                <img src="src/assets/cubiertos.svg" alt="" className="w-14" />
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#7144EF]">
                RECETAS
                </h1>
            </div>
            <div className="flex flex-col justify-center w-full items-center">
                <div className="w-1/2 max-h-96 mt-32 rounded-2xl shadow-[0px_0px_20px_1px_rgba(0,0,0,0.5)] py-10 px-16 overflow-auto">
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
                <div className="my-10 border border-black h-[45px] w-[80px] text-center py-2 rounded-[15px] dark:md:hover:bg-gray-200">
                    <button>EDITAR</button>
                </div>
            </div>
            </div>
        
    );
}