function Login() {
    return (
        <main class="h-screen w-screen flex justify-center items-center bg-purple-800 z-10 ">
            <div class="w-[40rem] h-[40rem] border-purple-800 border-2 rounded-[5rem] z-50 bg-white">
                <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img class="mx-auto h-36 w-full" src="/public/imagenes/logoblanco.jpeg" />
                    </div>
                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" action="#" method="POST">
                            <div>
                                <label for="email" class="block text-1xl font-medium leading-6 text-gray-900 ">Usuario</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" placeholder="  Ingresa tu usuario" autocomplete="email" required class="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block font-medium leading-6 text-gray-900 text-1xl">Contraseña</label>
                                </div>
                                <div class="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password"
                                    placeholder="  Ingresa tu contraseña" required class="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="flex justify-center">
                                <button type="submit" class="text-center flex w-1/2 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold leading-6 text-black hover:text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 hover:transition-all transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Iniciar Sesion</button>
                            </div>
                        </form>

                        <p class="mt-10 text-center text-sm text-gray-500">
                            No tienes cuenta?
                            <a href="#" class="font-semibold leading-6 text-purple-700 hover:text-purple-700"> Registrate</a>
                        </p>
                    </div>
                </div>

            </div>

        </main>
    )
}
export default Login;