import { useAppDispatch } from "../Hooks/Redux"
import { loading,setHotel,setError,setListHotel,setlistoHotelError,loadingHotel } from "../reducers/ApiHotelByIdReduccers"
import HttpClient from "../HttpClient"
import { useCallback } from "react"

const UseHotelActions =() =>{

    const dispatch =  useAppDispatch()

    const getHotel = useCallback(async ({ propertyID, startDate, endDate, token, counPeople, promoCode }) => {
        dispatch(loading());  // Inicia el estado de carga
        try {
          const response = await HttpClient.getAvailableRoomTypes({ propertyID, startDate, endDate, token, counPeople, promoCode });
          if (response) {
            dispatch(setHotel(response)); // Si la respuesta es válida, actualiza el estado de los hoteles
            window.scrollTo({ top: 300, behavior: "smooth" }); // Desplázate hacia abajo suavemente
          } else {
            dispatch(setError("no found")); // Si no se encuentra, maneja el error
          }
        } catch (error) {
          dispatch(setError("no found")); // Si hay un error en la petición, maneja el error
        }
      }, [dispatch]); // Se agrega `dispatch` y las acciones que usas
      
    const getListHotel = useCallback(async () => {
        dispatch(loadingHotel());  // Inicia la carga
        try {
          const response = await HttpClient.getListoHotel(); // Petición para obtener los hoteles
          if (response) {
            dispatch(setListHotel(response));  // Si la respuesta es válida, actualiza el estado de los hoteles
          } else {
            dispatch(setlistoHotelError()); // Si no hay respuesta, gestiona el error
          }
        } catch (error) {
          dispatch(setlistoHotelError()); // Si hay un error en la petición, maneja el error
        }
      }, [dispatch]);  // Agregamos `dispatch` como dependencia
      
    
    return {
        getHotel,
        getListHotel
    }

}

export default UseHotelActions