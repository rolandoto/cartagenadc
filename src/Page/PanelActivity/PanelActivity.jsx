import React, { useCallback, useEffect } from "react"
import { CiCirclePlus } from "react-icons/ci";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import UseEventsActions from "../../Actions/useEventsActions";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import moment from "moment";

const PanelActivity =()  =>{

    const navigate = useNavigate();
    const { id } = useParams(); // Obtén el id de los parámetros de la URL
    
    const {getevents}= useSelector(state => state.Events);
    const {getEvents} =UseEventsActions()    

    const fetchDate =async() =>{
        await getEvents({id:id})
    }

    useEffect(() =>{
        fetchDate()
    },[])

    const PostHotelByIdHotel = useCallback(async () => {
      navigate(`/InsertEvents/${id}`); // Usa el id dinámicamente en la URL
    }, [navigate, id]);
    

/**  <p className="text-gray-500 mb-4">{item}</p> */
    return  (<>
            <div >
                <Toaster position="bottom-right"  richColors   />  
                    <button className="absolute right-5  top-2" onClick={PostHotelByIdHotel}   >
                                <CiCirclePlus fontSize={45} />
                    </button>
                    <div className="   mx-auto max-w-7xl p-6"  >
                    <h1 className="text-[30px] text-center text-yellow-500   font-lora  mb-6">Próximos eventos en Medellín</h1>
                        <div className="grid sm:grid-cols-1  gap-5   md:grid-cols-2 ">
                            {getevents.map((item) =>{
                                 const start =  moment(item.Start_date).utc().format('YYYY/MM/DD')
                                 const end =  moment(item.End_date).utc().format('YYYY/MM/DD')
                             
                                return (<Link to={`/UpdateDetailEvents/${item.ID}`}  className="flex  cursor-pointer items-center flex-col md:flex-row p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-white hover:shadow-lg transition ease-in duration-300 ">
                                            
                                            <div className="md:w-1/3">
                                                    <img
                                                        src={"https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-12%20at%209.26.10%20AM.jpeg?raw=true"}
                                                        alt="Room"
                                                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                                                    />
                                                </div>
                                            <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                                                    <h2 className="text-2xl  font-lora text-black mb-4">{item.Name}</h2>
                                                    <p className="text-gray-500 mb-4">{item.DescriptionEvent1}</p>
                                                   
                                            </div>
                                <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                                            <p className="text-gray-500 mb-4">Fecha Publicación </p>
                                            <p className="text-gray-500 mb-4">
                                                {start} a {end}
                                            </p>
                                </div>
                            </Link>)
                            })}
                        </div> 
                    </div>
            </div>
        </>)

}   
export default PanelActivity