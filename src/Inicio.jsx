function Inicio() {
    return (
        <div>
            <header>
                <nav class="bg-white flex justify-between items-center  w-full h-16">
                    <div>
                        <img class="w-60 h-20" src="/public/imagenes/logoblanco.jpeg" />
                    </div>
                    <div class="contenedor-botones">
                        
                        <button class="mr-3 rounded-full border border-black px-2 py-2 transition font-medium hover:border-purple-700  hover:bg-purple-700 hover:text-white ">Iniciar sesion</button>
                        <button class="mr-6 rounded-full border  border-black px-2 py-2 transition font-medium hover:border-purple-700  hover:bg-purple-700 hover:text-white">Registrarse</button>
                    </div>
                </nav>
            </header>
            <section class="h-screen w-full flex">
                <div class="bg-[url('/public/imagenes/Fondo-1.jpg')] h-full w-full bg-no-repeat bg-cover flex justify-center items-center flex-col  ">
                    <h1 class="text-center text-white z-20 text-8xl w-3/5 font-bold">¡TRANSFORMA TU VIDA CON <span class="bg-clip-text text-transparent bg-gradient-to-tr from-black to-purple-700">FITZESTPRO</span>!</h1>

                    <div class="bg-[url('/public/imagenes/linea.png')] h-2 w-96 mt-9"></div>
                </div>
                <div class="bg-black/50 h-screen w-full absolute z-10 ">  </div>
            </section>
            <section class="h-screen w-full flex items-center gap-3">

                <div class="w-1/2 flex   justify-center flex-col ml-9">
                    <div>
                        <h2 class=" text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-tr from-black to-purple-700">DISMORFIA CORPORAL?</h2>
                    </div>

                    <div>
                        <p class="text-4xl">Muchas personas se sienten mal con su estado fisico actual ademas de que se encuentra mucha informacion distorcionada y un poco confusa en la web que hacen mas dificil el echo de realizar un verdadero cambio fisico que logre sacarnos del estancamiento para esto nuestra web
                            adopta una posicion de un guia que te acompalara
                            en el camino de mejorar tu estado fisico he incluso emocional  </p>
                    </div>

                </div>

                <div class="flex justify-center items-center" >
                    <img src="/public/imagenes/seccion_2.webp" class="h-4/5 w-4/5 rounded-[60px]" />
                </div>
            </section>

            <section class="bg-[#4f33a6] flex flex-col">
                <div class="text-center  text-white text-8xl  font-bold mt-8">
                    <h1>¡PLANES GENERALES!</h1>
                </div>
                <div class="h-screen w-full flex  gap-x-64 justify-center items-center pb-20 ">

                    <article id="tarjeta_1" class=" h-3/5 w-96 flex justify-center items-center  text-white">
                        <div class="absolute flex  h-full w-full justify-center items-center z-40 text-5xl  font-bold pt-8  hover:items-start hover:mt-64 ">
                            <h1>VOLUMEN</h1>
                        </div>
                        <p class="opacity-0 absolute w-full h-full ">
                            Con este plan se buscara  una ganacia muscular con un alto volumen de entrenamiento y el aumento de las calorias en el consumo general de alimentos para el aumento de masa muscular
                        </p>
                        <img src="/public/imagenes/targeta_1.jpg" id="imagen_1_tarjeta_1" />
                        <img src="/public/imagenes/targeta_1_animado.png" class="z-10"></img>

                    </article>

                    <article id="tarjeta_2" class="h-3/5 w-96 flex justify-center items-center  text-white">
                        <div class="absolute flex  h-full w-full justify-center items-center z-40 text-5xl  font-bold pt-8  hover:items-start hover:mt-64 ">
                            <h1>DEFICIT</h1>
                        </div>
                        <p class="opacity-0 absolute w-full h-full ">
                            En este plan de déficit, buscas consumir menos calorías de las que tu cuerpo necesita para perder peso y grasa corporal. El objetivo principal es quemar grasa mientras mantienes la masa muscular.
                        </p>

                        <img src="/public/imagenes/targeta_2.jpg" id="imagen_1_tarjeta_2" />
                        <img src="/public/imagenes/targeta_2_animado.png" id="imagen_2_tarjeta_2" ></img>
                    </article>

                    <article id="tarjeta_3" class="h-3/5 w-96  flex justify-center items-center  text-white">
                        <div class="absolute flex  h-full w-full justify-center items-center z-40 text-4xl  font-bold pt-8  hover:items-start hover:mt-64 ">
                            <h1>RECOMPOSICION</h1>
                        </div>
                        <p class="opacity-0 absolute w-full h-full ">
                            En este plan de recomposición, se busca cambiar la composición corporal al mismo tiempo que se mantiene el peso actual. El objetivo es perder grasa y ganar músculo al mismo tiempo.
                        </p>
                        <img src="/public/imagenes/targeta_3.jpg " id="imagen_1_tarjeta_3" />
                        <img src="/public/imagenes/targeta_3_animado.png" id="imagen_2_tarjeta_3"></img>
                    </article>

                </div>
            </section>
            <section class="h-screen w-full flex items-center gap-3 flex-row-reverse justify-center  ">

                <div class="w-1/2 flex   justify-center flex-col ml-9">
                    <div>
                        <h2 class=" text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-tr from-black to-purple-700">ALIMENTACION ....</h2>
                    </div>

                    <div>
                        <p class="text-4xl">La buena alimentación desempeña un papel fundamental cuando se trata de alcanzar tus objetivos de entrenamiento y mantener un estilo de vida saludable. Lo que comes antes, durante y después de tu entrenamiento puede marcar la diferencia en tu rendimiento, recuperación y desarrollo muscular.   </p>
                    </div>

                </div>

                <div class="flex justify-center items-center h-3/5 w-2/5" >
                    <img src="/public/imagenes/seccion_4.png" class="h-full w-full rounded-[60px]" />
                </div>
            </section>

            <footer class="h-[15rem] bg-[#0c1115] flex  justify-between items-center ">
                <div class="h-1/2">
                    <img src="/public/imagenes/logo_oscuro.png" />
                </div>
                <div class="mr-20  text-white text-lg  font-bold ">
                    <p>
                        Contactanos:<br />
                        3155114960<br />
                        3046224050<br />
                        3173292903

                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Inicio;