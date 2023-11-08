export default function NavBar(){
    return(
        <header className="bg-red-700 bg-opacity-10 backdrop-blur-md text-red-600 sticky top-0">
            <nav class="flex justify-between items-center space-x-4">
              <img src="/back.jpg" alt="logo" className="w-16 rounded-full" />
              <h1 className="font-bold text-6xl">MovieMoto 🎥</h1>
                <div className="flex p-4">
                    <h3><i class="fa-solid fa-magnifying-glass"></i></h3>
                    <input type="text" placeholder="search" id="search" className="indent-2 ml-2 rounded-lg" />
              </div>
         </nav>
        </header>
    )
}