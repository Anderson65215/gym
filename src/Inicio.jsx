function Inicio() {
    return (
        <div>
            <header class="relative ">
                <nav class="bg-white flex justify-between items-center fixed w-full z-40">
                    <div>
                        <img class="w-60" src="/public/imagenes/logoblanco.jpeg" />
                    </div>
                    <div class="contenedor-botones">
                        <button class="mr-3 rounded-full border border-black px-2 py-2 transition font-medium hover:border-purple-700  hover:bg-purple-700 hover:text-white">Iniciar sesion</button>
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

            <section class="bg-[#4f33a6]">
                <div class="text-center  text-white text-5xl  font-bold pt-8">
                    <h1>¡PLANES GENERALES!</h1>
                </div>
                <div class = "h-screen w-full flex  gap-y-64 gap-x-64 justify-center items-center">
                    <article id="tarjeta_1"class=" h-3/5 w-96 bg-black  ">
                    <img src="/public/imagenes/targeta_1.jpg"/>
                    <img src="/public/imagenes/targeta_1_animado.png"></img>
                    </article>
                    <article id="tarjeta_2"class="h-3/5 w-96 bg-black">
                    <img src="/public/imagenes/targeta_2.jpg"/>
                    <img src="/public/imagenes/targeta_2_animado.png"></img>
                    </article>
                    <article id="tarjeta_3" class="h-3/5 w-96 bg-black">
                    <img src="/public/imagenes/targeta_3.jpg"/>
                    <img src="/public/imagenes/targeta_3_animado.png"></img>
                    </article>
                </div>
            </section>


        </div>
    )
}

export default Inicio;