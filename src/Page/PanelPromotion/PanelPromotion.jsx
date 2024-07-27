import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';  // Import Spanish locale
import useRoomsPromotions from '../../Actions/useRoomsPromotions';
import { useParams } from 'react-router-dom';
import { Toaster } from 'sonner';
import LoadingSkeleton from '../../Component/LoadingSkeleton/LoadingSkeleton';
import { useSelector } from 'react-redux';

moment.locale('es');  // Set locale to Spanish

const PanelPromotion = () => {
  const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const {id} = useParams()
  const {RoomsGetPromotions,loadingGetRoomsProtions,errorGetRoomsProtions}= useSelector((state) => state.RoomsPromotios)
  
  const  {PostRoomsPromotions,GetRoomsPromotions} = useRoomsPromotions()

  const FetchDate =async() =>{
        await GetRoomsPromotions({id})
  }

  useEffect(() =>{
    FetchDate ()
  },[])

  const [activeDays, setActiveDays] = useState([]);
  const id_hotel = id; // ID del hotel

  
  useEffect(() => {
    setActiveDays(RoomsGetPromotions);
  }, [RoomsGetPromotions])
  const handleCheckboxChange = (index) => {
    setActiveDays(prevDays => {
      const dayNumber = index + 1; // Convertir el índice a número de día (1-7)
      const dayFormat = moment().day(dayNumber).format('d'); // Nombre completo del día de la semana

      if (prevDays.some(day => day.day_number === dayFormat)) {
        // Eliminar el día si ya está en la lista
        return prevDays.filter(day => day.day_number !== dayFormat);
      } else {
        // Agregar el nuevo día
        return [...prevDays, { day_number: dayFormat, id_hotel }];
      }
    });

  };

  const handleSave = async() => {
    await PostRoomsPromotions({days:activeDays})
  };

  const isTodaySelected = () => {
    const todayIndex = moment().format('d'); // Obtiene el nombre completo del día actual
    return activeDays.some(day => day.day_number === todayIndex); // Verifica si el nombre del día actual está en activeDays
  };


  const FillContent =()=>{
    if(loadingGetRoomsProtions){
     return  (
              <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
              <LoadingSkeleton />
              </div> 
     ) 
    }if(errorGetRoomsProtions){
      return   <p>...eror al cargar</p>
              }
      return <> <div className="container mx-auto p-4">
      <Toaster position="bottom-right"  richColors   />  
       <div className="mb-4">
           <h2 className="text-lg font-bold mb-2">Activar Promoción</h2>
           <div className="border rounded">
               <div className="flex border-b">
                   <div className="w-1/4 p-2"></div>
                   <div className="w-3/4 flex">
                       {weekdays.map((day, index) => (
                           <div key={index} className="flex-1 p-2 text-center font-semibold">
                               {day} ({(index + 1) % 7})
                           </div>
                       ))}
                   </div>
               </div>
               {/* Activar Promoción Row */}
               <div className="flex border-b">
                   <div className="w-1/4 p-2 font-semibold">Activar Promoción</div>
                   <div className="w-3/4 flex">
                       {weekdays.map((_, index) => (
                           <div key={index} className="flex-1 p-2 flex justify-center items-center">
                               <input 
                                   type="checkbox" 
                                   className="form-checkbox h-5 w-5"
                                   checked={activeDays.some(day => day.day_number === moment().day(index + 1).format('d'))}
                                   onChange={() => handleCheckboxChange(index)}
                               />
                           </div>
                       ))}
                   </div>
               </div>
           </div>
       </div>

           <div className="mt-4 flex justify-end space-x-2">
               <button 
                   className="bg-blue-500 text-white px-4 py-2 rounded"
                   onClick={() => {
                       handleSave();
                       if (isTodaySelected()) {
                           alert('El día de hoy está activo.');
                       } else {
                           alert('El día de hoy no está activo.');
                       }
                   }}
               >
                   GUARDAR
               </button>
               <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">CANCELAR</button>
           </div>
           </div></>
  }

  console.log(activeDays)

  return ( <>
            {FillContent()}
            </> );
};

export default PanelPromotion;
