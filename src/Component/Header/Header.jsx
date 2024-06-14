import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header =() =>{

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
            <nav className=" w-full z-40 items-center fixed p-3 bg-white shadow-md">
                    <div  className="  mx-auto flex items-center   justify-between   max-w-7xl" > 
                    <div className="text-3xl font-bold text-indigo-600"><Link  to="/"><img className="w-[120px]" src="https://textycon.com/wp-content/uploads/Logo-Gallery-Colores.png" alt="" /></Link> </div>

                    
                    <div className=" hidden lg:block   space-x-4">
                        <a href="#" className="text-gray-800 font-normal  hover:text-orange-600">Inicio</a>
                        <a href="#" className="text-gray-800 font-normal hover:text-orange-600">Próximos eventos</a>
                        <a href="#" className="text-gray-800 font-normal hover:text-orange-600">Reservas</a>
                    </div>
                    <div className="hidden lg:block " >
                        <a href="#" className="text-white bg-orange-500 w-[150px] p-4 rounded hover:bg-orange-600">Cómo llegar</a>
                    </div>

                    <div className="lg:hidden" >
                    <button
                        className="text-gray-800 focus:outline-none"
                        onClick={toggleMenu}
                        >
                                    <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                            </svg>
                            </button>
                    </div>

                  
            </div>

           {menuOpen &&  <div className="lg:hidden flex flex-col mt-4 space-y-2">
                        <a href="#" className="text-gray-800 font-normal hover:text-orange-600">
                            Inicio
                        </a>
                        <a href="#" className="text-gray-800 font-normal hover:text-orange-600">
                            Próximos eventos
                        </a>
                        <a href="#" className="text-gray-800 font-normal hover:text-orange-600">
                            Reservas
                        </a>
                        <a
                            href="#"
                            className="text-white bg-orange-500 w-full p-4 rounded hover:bg-orange-600"
                        >
                            Cómo llegar
                        </a>
                        </div>
                }
        </nav>  
    )

}

export default Header