import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UseHotelActions from "../../Actions/useHotelsActions";
import CardHotel from "../../Component/CardHotel/CardHotel";


const PanelHotel =() =>{

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

        return <CardHotel hotelList={hotelList}  />
    }
    return (<>
                {Contentfill()}
            </>)


}

export default PanelHotel