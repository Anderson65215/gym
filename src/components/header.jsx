export function Header() {
    return (
      <header className='bg-[#0c1115] h-16  flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <img class="w-24" src="public\imagenes\Logo.jpg"></img>
          <nav className='flex justify-center items-center'>
          <div className='ml-10 flex items-baseline space-x-4'>
          <button  class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-9 py-2 text-base font-medium">Inicio</button>
          <button class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Alimentos</button>
          <button class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Ejercicios</button>
          <button class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Tiendas</button>
        </div>
          </nav>
        </div>
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">   
          <img class="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt=""></img>
        </button>
      </header>
    );
  }
  
  