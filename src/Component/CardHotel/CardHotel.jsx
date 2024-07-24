import React from "react";
import { Link } from "react-router-dom";

const CardHotel =({hotelList}) =>{

    return (
            <div className="max-w-7xl mx-auto ">   
            <h1 className="text-2xl text-center font-bold mb-6">Hoteles</h1>
                    <div className="   grid grid-cols-4 gap-4 bg-white  rounded-lg overflow-hidden">
                    {hotelList?.map((hotel, index) => (
                        <Link to={`/PanelActivity/${hotel.id_hotel}`} className=" border-hotel cursor-pointer  hover:bg-gray-200 animamati bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                        <div className="p-11">
                            <h2 className="text-xl  text-gray-900">{hotel.nombre}</h2>
                        </div>
                        </Link>
                ))}      
            </div>    
        </div>
    )

}

export default CardHotel