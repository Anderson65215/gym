export function Ejercicios({ imagen , Nombre}) {
    return (
    <div className="w-full  p-7 ">
        <div className="flex justify-between text-center items-center dark:md:hover:bg-gray-200 rounded-[15px]">
            <img className="h-24 rounded-[15px]" src="https://keifit.com/wp-content/uploads/2018/01/rutina-pierna-Why-Reverse-Lunges-Are-Better-Than-Forward-Lunges-STACK.jpg" alt="img-ejercicio"/>
            <p className="w-[120px]"> Nombre </p>
        </div>
    </div>
    );
}