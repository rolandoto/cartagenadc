import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header =({scrollToRoomSectionEvent}) =>{

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
            <nav className=" w-full z-40 items-center fixed p-3 bg-white shadow-md">
                    <div  className="  mx-auto flex items-center   justify-between   max-w-7xl" > 
                    <div className="text-3xl font-bold text-indigo-600">
                    <Link to="/">
                        <img 
                        className="w-[100px]" 
                        src="https://github.com/rolandoto/image-pms/blob/main/Logos/Logo-de-Cartagena-DC.png?raw=true" 
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        />
                    </Link>
                    </div>

                    <div className=" hidden lg:block   space-x-4">
                        <Link to="/" className="text-black cursor-pointer text-[16px] font-normal  hover:text-black"  >Inicio</Link>
                        <Link to="/Events" className="text-black cursor-pointer text-[16px] font-normal hover:text-black"   >Próximos eventos</Link>
                        <Link to="/Accomodation" className="text-black  cursor-pointer text-[16px] font-normal hover:text-black"  >Reservas</Link>
                    </div>
                    <div className="hidden lg:block " >
                        <a 
                         target="_blank"
                         href="https://www.google.com/maps/place/Hotel+cartagena+DC/@10.3930228,-75.4841207,15z/data=!4m2!3m1!1s0x0:0xabf0c7ff8c60f89e?sa=X&ved=1t:2428&ictx=111"
                        className="text-white bg-yellow-500 w-[150px] p-4 rounded hover:bg-yellow-500">Cómo llegar</a>
                    </div>

                    <div className="lg:hidden" >
                    <button
                        className="text-black focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
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
                        />
                    </svg>
                </button>
                    </div>

                  
            </div>

           {menuOpen &&  <div className="lg:hidden flex flex-col mt-4 space-y-2">
                            <Link to="/" className="text-black text-[16px] font-normal  hover:text-blakc" >
                                Inicio
                            </Link>
                            <Link to="/Events" className="text-black text-[16px] font-normal  hover:text-black"  >
                                Próximos eventos
                            </Link>
                            <Link  to="/Accomodation" className="text-black text-[16px] font-normal  hover:text-blakc" >
                                Reservas
                            </Link>
                            <a  target="_blank"
                                href="https://www.google.com/maps/place/Hotel+cartagena+DC/@10.3930228,-75.4841207,15z/data=!4m2!3m1!1s0x0:0xabf0c7ff8c60f89e?sa=X&ved=1t:2428&ictx=111"
                                className="text-white bg-black w-full p-4 rounded hover:bg-black"   
                            >
                                Cómo llegar
                            </a>
                        </div>
            }
        </nav>  
    )

}

export default Header