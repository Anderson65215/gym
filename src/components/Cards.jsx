export function Cards({ Nombre, calorias, imagen }) {
  return (
    <div className="w-full  p-7 ">
        <div className="flex justify-between text-center items-center dark:md:hover:bg-gray-200 rounded-[15px]">
          <img className="h-24 rounded-[15px]" src="https://www.gourmet.com.co/wp-content/uploads/2020/08/almuerzo-saludable-imagen-destacada.jpg" alt="img-alimentos"/>
          <p className="w-[120px]">
            almuerzo
          </p>
          <p className="w-[120px]">
            calorias
          </p>
        </div>
        
    </div>
  );
}
