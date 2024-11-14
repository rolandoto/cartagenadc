import React from "react";
import { useNavigate } from "react-router-dom";

const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-[#fffddf99] py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 text-">
                    <h2 className="text-3xl font-normal text-center  text-black-700 text-[30px] font-lora ">Reserva tu habitación hoy mismo</h2>
                    <p className="text-gray-700 text-justify mt-8 mb-4">
                    Cada una de nuestras habitaciones está equipada con aire acondicionado, baño privado y Wi-Fi gratuito, garantizando una estancia confortable y conectada. Ya sea que estés buscando una opción sencilla o un espacio más lujoso, contamos con 4 tipos de habitaciones diseñadas para satisfacer tus necesidades. 
                    </p>
                   
                    <button onClick={HandNext}  className="text-white bg-black mt-4  w-[200px] p-3 rounded hover:bg-black"><span className=" text-[20px]" >Reservar</span></button>
                </div>
                <div className="md:w-1/2 p-4">
                <img 
                    src="https://grupo-hoteles.com/storage/app/6/rooms/1843848947-16-rooms-slider-1-hotel-cartagena-dc-economico-habitacion-delux-principal-1.webp" 
                    alt="Reservation" 
                    width="600" 
                    height="400" 
                    className="w-full rounded-lg shadow-lg" 
                />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion