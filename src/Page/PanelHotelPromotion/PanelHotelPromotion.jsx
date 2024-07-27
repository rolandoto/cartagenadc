import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UseHotelActions from "../../Actions/useHotelsActions";
import { Link } from "react-router-dom";

const PanelHotelPromotion =() =>{

    const {hotelList,loadingHotel,errorHotel}= useSelector((state) => state.Hotel)
    const {getListHotel} =UseHotelActions()

    const fetchDate =async() =>{
        await getListHotel()
      } 

      useEffect(() =>{
        fetchDate()
      },[])

    const Contentfill =() =>{

        if(loadingHotel){
            return <h1 className="text-center">cargando...</h1>
        }if(errorHotel){
            return <p>Error al cargar el hotel</p>
        }

        return  <div className="max-w-7xl mx-auto ">   
                    <h1 className="text-2xl text-center font-bold mb-6">Hoteles para la promosion</h1>
                            <div className="   grid grid-cols-4 gap-4 bg-white  rounded-lg overflow-hidden">
                            {hotelList?.map((hotel, index) => (
                                <Link to={`/PanelPromotion/${hotel.id_hotel}`} className=" border-hotel cursor-pointer  hover:bg-gray-200 animamati bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                                <div className="p-11">
                                    <h2 className="text-xl  text-gray-900">{hotel.nombre}</h2>
                                </div>
                                </Link>
                        ))}      
                    </div>    
                </div>
                }
    return (<>
                {Contentfill()}
            </>)


}

export default PanelHotelPromotion