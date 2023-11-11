export default function NavBar(){
    return(
        <header className="w-full fixed left-0 top-0 bg-white text-white p-4 bg-opacity-10 backdrop-blur-md">
            <nav class="flex justify-between items-center space-x-4">
              <img src="/back.jpg" alt="logo" className="w-16 rounded-full" />
              <h1 className="font-bold text-6xl">MovieMoto 🎥</h1>
                <div className="flex p-4 text-center space-x-2">
                    <form action="">
                        <input type="search"
                         placeholder="search" 
                         id="search" 
                         className="indent-2 ml-2 rounded-lg p-2 active:bg-red-300"
                         name=""
                          />
                    </form>
                    <h3 className="text-3xl hover:text-red-500 ease-in duration-300"><i class="fa-solid fa-magnifying-glass"></i></h3>
              </div>
         </nav>
        </header>
    )
}
