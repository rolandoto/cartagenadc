import { useAppDispatch } from "../Hooks/Redux"
import { loadingEvents,
        setErrorEvents,
        setEvents,
        loadinggetEvents,
        setgetEvents,
        setErrorgetEvents,
        loadinggetEventsDetail,
        setErrorgetEventsDetail,
        setgetEventsDetail} from "../reducers/ApiEventsReduccers"
import HttpClient from "../HttpClient"
import {toast} from "sonner"
import { useNavigate } from "react-router-dom"

const UseEventsActions =() =>{
    const navigate = useNavigate();
    const dispatch =  useAppDispatch()

    const postCreateEvents =async({Name,Description,Start_date,End_date,Place,id_hotel}) =>{
        dispatch(loadingEvents())
        try {
            const response  = await HttpClient.PostCreateEvents({Name,Description,Start_date,End_date,Place,id_hotel})
            console.log(response)
            if(response){
                dispatch(setEvents(response)) 
                navigate(-1)
            }else{
                dispatch(setErrorEvents("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setErrorEvents("no found")) 
            toast.error(`error en el servicio`)
        }
    }

    const getEvents =async({id}) =>{
        dispatch(loadinggetEvents())
        try {
            const response =await HttpClient.getEvents({id})
                
            if(response){
                dispatch(setgetEvents(response)) 
            }else{
                dispatch(setErrorgetEvents("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setErrorgetEvents("no found")) 
            toast.error(`error en el sdasdswa`)
        }
    }

    const getEventsDetail =async({id}) =>{
        dispatch(loadinggetEventsDetail())
        try {
            const response =await HttpClient.getEventsDetail({id})
                
            if(response){
                dispatch(setgetEventsDetail(response)) 
            }else{
                dispatch(setErrorgetEventsDetail("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setErrorgetEventsDetail("no found")) 
            toast.error(`error en el sdasdswa`)
        }
    }

    return {
        postCreateEvents,
        getEvents,
        getEventsDetail
    }

}

export default UseEventsActions