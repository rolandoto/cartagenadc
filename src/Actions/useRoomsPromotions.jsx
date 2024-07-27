import { useAppDispatch } from "../Hooks/Redux"
import HttpClient from "../HttpClient"
import {toast} from "sonner"
import {setRoomsPromtions,
        setErrorRoomsPromtions,
        loadingRoomsPromtions,
        
        loadingGetRoomsPromtions,
        setErrorGetRoomsPromtions,
        setRoomsGetPromtions
        } from "../reducers/ApiRoomsPromotion"

const useRoomsPromotions =() =>{
   
    const dispatch =  useAppDispatch()

    const PostRoomsPromotions =async({days}) =>{
        dispatch(loadingRoomsPromtions())
        try {
            const response  = await HttpClient.PostRoomPromotions({days})
            if(response){
                dispatch(setRoomsPromtions(response)) 
                toast.success(`se activado la promosiones exitosas`)
            }else{
                dispatch(setErrorRoomsPromtions("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setErrorRoomsPromtions("no found")) 
            toast.error(`error en el servicio  ${error}` )
        }
    }

    const GetRoomsPromotions =async({id}) =>{
        dispatch(loadingGetRoomsPromtions())
        try {
            const response  = await HttpClient.GetRoomsPromtions({id})
            if(response){
                dispatch(setRoomsGetPromtions(response)) 
                toast.success(`se activado la promosiones exitosas`)
            }else{
                dispatch(setErrorGetRoomsPromtions("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setErrorGetRoomsPromtions("no found")) 
            toast.error(`error en el servicio  ${error}` )
        }
    }

    return {
        PostRoomsPromotions,
        GetRoomsPromotions
    }

}

export default useRoomsPromotions