export function TarjetaTienda(imagen,nombre,sabor,precio) {
  return (
    <div className="p-7 items-center dark:md:hover:bg-gray-200 rounded-[15px] shadow-[0px_0px_20px_1px_rgba(0,0,0,0.5)] m-5">
      <div className="flex flex-col justify-between text-center items-center">
        <img
          className="h-28 rounded-[15px]"
          src={imagen}
          alt={nombre}
        />
        <p className="w-[120px]">{nombre}</p>
        <p className="w-[120px]">{sabor}</p>
        <p className="w-[120px]">{precio}</p>
      </div>
    </div>
  );
}
