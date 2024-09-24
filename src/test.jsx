//htttcliente
/** 
import { config } from "../Config/Config";

const PostHotelByIdHotel = async ({id,desde,hasta,counPeople}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/SeacrhHotelsById`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({id,desde,hasta,counPeople})
        });
    
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const data = await resp.json();
        return data;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const PostCreateReservation = async ({cart,name,apellido,email,city,country,fecha,number,exp_month,exp_year,cvc,card_holder,subtotal,phone}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/wompi/RegisterCardWompi`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({cart,name,apellido,email,city,country,fecha,number,exp_month,exp_year,cvc,card_holder,subtotal,phone})
        });
    
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const {ok} = await resp.json();
        return ok;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const GetCountry = async () => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/resecion/getcountry`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const {query} = await resp.json();
        return query;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const getListoHotel = async () => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/listmotels`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const {query} = await resp.json();
        return query;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };



  const PostCreateEvents = async ({Name,Description,Start_date,End_date,Place,id_hotel}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/webSite/InsertEventsWebsite`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({Name,Description,Start_date,End_date,Place,id_hotel})
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }

        console.log(resp)
        const data = await resp.json();
        return data;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const getEvents= async ({id}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/webSite/getEvents/${id}`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {userQuery} = await resp.json();
        return userQuery;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };


  const getEventsDetail= async ({id}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/webSite/getEventsDetail/${id}`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {userQuery} = await resp.json();
        return userQuery;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };


  const PostRoomPromotions = async ({days}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/RoomHotelPromotion`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({days})
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {ok} = await resp.json();
        return ok;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const GetRoomsPromtions = async ({id}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/RoomHotelPromotion/${id}`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          },
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {userQuery} = await resp.json();
        return userQuery;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  export default {
    PostHotelByIdHotel,
    PostCreateReservation,
    GetCountry,
    getListoHotel,
    PostCreateEvents,
    getEvents,
    getEventsDetail,
    PostRoomPromotions,
    GetRoomsPromtions
  }


  



  //reduer cart

  import {createSlice} from "@reduxjs/toolkit"

export const initialState ={
    cart:[],
    loadingCart:false,
    errorCart:null
}
export const CartReduccers = createSlice({
    name:"CartRoom",
    initialState,
    reducers:{
        loadingCart:(state) =>{
            state.loadingCart=true
            state.errorCart= null
        },
        setErrorCart:(state) =>{
            state.loadingCart = true
            state.errorCart = "false"
        },
        addItemToCart:(state,action) =>{
            state.cart.push(action.payload);
            state.loadingCart= false
        },
        removetoCart: (state, action) => {
            const { roomByID } = action.payload;
            state.cart = state.cart.filter((item) => item.roomByID !== roomByID);
            state.loadingCart = false;
        },
        removeALL: (state, action) => {
            state.cart = [];
            state.loadingCart = false;
        }
    }
})

export const {loadingCart,addItemToCart,setErrorCart,removetoCart,removeALL} = CartReduccers.actions

export default  CartReduccers.reducers


import { useAppDispatch } from "../Hooks/Redux"
import { loading,setHotel,setError,setListHotel,setlistoHotelError,loadingHotel } from "../reducers/ApiHotelByIdReduccers"
import HttpClient from "../HttpClient"

const UseHotelActions =() =>{

    const dispatch =  useAppDispatch()

    const getHotel =async({id,desde,hasta,counPeople}) =>{
        dispatch(loading())
        try {
            const response  = await   HttpClient.PostHotelByIdHotel({id,desde,hasta,counPeople})
            if(response){
                dispatch(setHotel(response)) 
            }else{
                dispatch(setError("no found")) 
            }
        } catch (error) {
            dispatch(setError("no found")) 
         
        }
    }

    const getListHotel = async() =>{
        dispatch(loadingHotel())
        try {
            const response  = await   HttpClient.getListoHotel()
            if(response){
                dispatch(setListHotel(response)) 
            }else{
                dispatch(setlistoHotelError("no found")) 
            }
        } catch (error) {
            dispatch(setlistoHotelError("no found")) 
         
        }
    }

    
    return {
        getHotel,
        getListHotel
    }

}

export default UseHotelActions


import { useAppDispatch } from "../Hooks/Redux"
import HttpClient from "../HttpClient"
import {toast} from "sonner"
import { setCreateReservation, setError,loading, loadingCountry,setCountry,setErrorCountry} from "../reducers/ApiCreateByidHotel"
import useCartActions from "./useCartActions"

const useReservationCreate =() =>{
    const {RemoveCartAll } =useCartActions()

    const dispatch =  useAppDispatch()

    const PostCreateHotel =async({cart,name,apellido,email,city,country,fecha,number,exp_month,exp_year,cvc,card_holder,subtotal,phone}) =>{
        dispatch(loading())
        try {
            const response  = await HttpClient.PostCreateReservation({cart,name,apellido,email,city,country,fecha,number,exp_month,exp_year,cvc,card_holder,subtotal,phone})
            if(response){
                dispatch(setCreateReservation(response)) 
                RemoveCartAll()
                toast.success(`Exitoso`)
            }else{
                dispatch(setError("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setError("no found")) 
            toast.error(`error en el servicio  ${error}` )
        }
    }

    const getCountry =async() =>{
        dispatch(loadingCountry())
        try {
            const response  = await HttpClient.GetCountry()
            if(response){
                dispatch(setCountry(response)) 
                toast.success(`Exitoso`)
            }else{
                dispatch(setErrorCountry("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setErrorCountry("no found")) 
            toast.error(`error en el servicio  ${error}` )
        }
    }

    return {
        PostCreateHotel,
        getCountry
    }

}

export default useReservationCreate

import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import "./style.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Search from "../../Component/Search/Search";
import { SectionSearch} from "../../Ui/Style/GeneralStyle";
import CardAccomodation from "../../Component/CardAccomodation/CardAccomodation";
import CalenderSearch from "../../Component/CalenderSearch/CalenderSearch";
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import moment from "moment";
import LoadingSkeleton from "../../Component/LoadingSkeleton/LoadingSkeleton";
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import Header from "../../Component/Header/Header";
import EmpyCart from "../../Component/EmpyCart/EmpyCart";
import Cart from "../../Component/Cart/Cart";
import { IconRiCloseLargeLine } from "../../Component/Icons/Icons";
import UseCart from "../../Hooks/UseCart";
import LoadingOverlay from "../../Component/LoadingCreateReserva/LoadingOverlay";
import HeaderAccomodation from "../../Component/HeaderAccomodation/HeaderAccomodation";
import Footer from "../../Component/Footer/Footer";
import useRoomsPromotions from "../../Actions/useRoomsPromotions";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";

const Accommodation = () => {


  useEffect(() => {
    // Scrolls to the top of the document on component mount
    window.scrollTo(0, 0);
}, []);

  const {getHotel} = UseHotelActions()
  const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
  const {error,hotel,loading}= useSelector((state) => state.Hotel)
  const [promotion,setPromotions] =useState(false)
  const [visible, setVisible] = useState(false);
      
  const {loadingCart} = useSelector(state => state.Cart);
  const {handleSelect,state,setContextMenuPosition,contextMenuPosition,
    handChangeAdults,
    handChangeChildrem,
    handDecreaseAdults,
    handDecreaseChildren,
    totalCountAdults,
    adults,
    childrem ,
    getClassNameForDate} =  UseCalenderSearch()

    const {getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    const [checkbox,setCheckBox] =useState(false)
    const startDate = state[0]?.startDate;
    const endDate = state[0]?.endDate;
    const formattedStartDate = startDate ? moment(startDate).format('YYYY-MM-DD') : '';
    const formattedEndDate = endDate ? moment(endDate).format('YYYY-MM-DD') : '';
    const formattedStartDateToString = moment(state[0]?.startDate).format('DD MMM YYYY').toLowerCase();
    const formattedEndDateToString = moment(state[0]?.endDate).format('DD MMM YYYY').toLowerCase();

    const handSubmitCupon =() =>{
      setPromotions(true)
      setVisible(false)
    }

    const PostHotelByIdHotel = useCallback(async () => {
        setContextMenuPosition(false);
        setContextShowMenuPeople(false)
        await getHotel({ id: 6, desde:formattedStartDate, hasta: formattedEndDate,counPeople:totalCountAdults });
    }, [formattedStartDate,formattedEndDate,totalCountAdults]);


    useEffect(() =>{
      PostHotelByIdHotel()
    },[])

    const HandClickMenuPeople =() =>{
      if(contextShowMenuPeople){
        setContextShowMenuPeople(false)
      }else if(!contextShowMenuPeople){
        setContextShowMenuPeople(true)
      }
      setContextMenuPosition(false)
    }

    const HandClickMenu =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }
    
    const handClickCart =() =>{
      setCheckBox(!checkbox)
   }

    const HandClickMenuEnd =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }


    const {RoomsGetPromotions,loadingGetRoomsProtions,errorGetRoomsProtions}= useSelector((state) => state.RoomsPromotios)
 
    const  {GetRoomsPromotions} = useRoomsPromotions()
  
    const FetchDate =async() =>{
          await GetRoomsPromotions({id:6})
    }


    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 5000); // 10000 ms = 10 segundos
  
      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }, []);
  

    const isTodaySelected = () => {
      const todayIndex = moment().format('d'); // Obtiene el nombre completo del día actual
      return RoomsGetPromotions.some(day => day.day_number === todayIndex); // Verifica si el nombre del día actual está en activeDays
    };

    const isTodaypromotions =isTodaySelected()



    const FillContentPromotions =()=>{
      if(loadingGetRoomsProtions){
       return  (
                <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                <LoadingSkeleton />
                </div> 
       ) 
      }if(errorGetRoomsProtions){
        return   <p>...eror al cargar</p>
                }
        return <>{visible &&
          
          isTodaypromotions && (
          <div className="fixed right-4  left-0 w-full m-auto h-[190px] top-44 z-40 text-white flex rounded-lg overflow-hidden shadow-lg max-w-md">

              <div className="p-4  flex-1 bg-gray-700">
                <h2 className="text-[15px] font-bold mb-2">¡OFERTA EXCLUSIVA SOLO PARA TI!</h2>
                <p className="text-sm mb-3">
                Reserva una de nuestras comidas habitaciónes y unten un 10% de descuento
                </p>
                <button  onClick={handSubmitCupon}  className="bg-white w-[200px] md:w-[200px]  text-gray-800 px-4 py-1 rounded text-sm font-semibold hover:bg-gray-200 transition-colors">
                  APLICAR DESCUENTO
                </button>
              </div>
              <div className="w-1/2 relative">
                <img 
                  src="https://grupo-hoteles.com/storage/app/6/rooms/206865655-14-rooms-slider-3-hotel-cartagena-dc-economico-habitacion-clasica-seleccion.webp" 
                  alt="Luxury Suite" 
                  className="object-cover h-[190px] w-full"
                />
                <button onClick={() => setVisible(false)} className="absolute  w-6 h-6  top-1 right-1 text-white bg-gray-800 rounded-full flex items-center justify-center">
                  ×
                </button>

            </div>
          </div>
      )}</>
    }
  
    useEffect(() =>{
      FetchDate ()
    },[])
  
    const FillContent =()=>{
      if(!formattedStartDate && !formattedEndDate){
        return   <EmpyCart title={" Busca tu reserva en el calendario."} />
      }
      if(loading){
       return  (
                <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                <LoadingSkeleton />
                </div> 
       ) 
      }if(error){
        return    <EmpyCart title={"No tenemos habitaciones disponibles para esta ocupación"} />
                }
        return <>  {hotel?.availableRooms?.map((List,index) => <CardAccomodation  
                                                                totalCountAdults={totalCountAdults}
                                                                promotion={promotion} 
                                                                key={index} 
                                                                {...List}/>)}</>
    }
    const monthsToShow = window.innerWidth >= 700 ? 2 : 1;

    return (<div >
            <Toaster position="bottom-right"  richColors   />
            {loadingCart && <LoadingOverlay title={"Cargando..."} />}
            <Header/>
            
            <WhatsappButton />
            {subtotal >0 &&<Cart    
                            checkbxo={checkbox} 
                            handClickCart={handClickCart} /> } 
            <SectionSearch  >
            <HeaderAccomodation />
            <CalenderSearch  HandClickMenuPeople={HandClickMenuPeople} 
                            formattedStartDateToString={formattedStartDateToString}
                            formattedEndDateToString={formattedEndDateToString}
                            HandClickMenuEnd={HandClickMenuEnd}
                            HandClickMenu={HandClickMenu}
                            onsubmit={PostHotelByIdHotel} 
                            totalCountAdults={totalCountAdults}
                            />
          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex calender-search-Acoomodation lg:hidden"
                  rangeColors={["rgb(255 104 0 / 36%);"]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  editableDateInputs={true}
                  months={2}
                  dayContentRenderer={(date) => {
                    const className = getClassNameForDate(date);
                    return (
                      <div className={className}>
                        {date.getDate()}
                      </div>
                    );
                  }}
                  autoFocus
                  moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                  showSelectionPreview={false} // Muestra la selección previa
                  startDatePlaceholder="Early"
                  showDateDisplay={true}
                  ranges={state}
                  direction="horizontal"
                  locale={esLocale}
                />
              )}
          </div>
          {contextMenuPosition &&
              <div className="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div className="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                  <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine />;</button>
                 <div>
                    <h2 className="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                    <DateRange 
                          className="flex calender-search-Acoomodation lg:hidden"
                          rangeColors={["rgb(255 104 0 / 36%);"]}
                          minDate={new Date()}
                          onChange={handleSelect}
                          editableDateInputs={true}
                          months={monthsToShow}
                          dayContentRenderer={(date) => {
                            const className = getClassNameForDate(date);
                            return (
                              <div className={className}>
                                {date.getDate()}
                              </div>
                            );
                          }}
                          autoFocus
                          moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                          showSelectionPreview={false} // Muestra la selección previa
                          startDatePlaceholder="Early"
                          showDateDisplay={true}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                      />
                     <button
                      className="mt-6 bg-[#eab308] text-white px-6 py-3 rounded-lg hover:bg-[#eab308]"
                      onClick={(e) => setContextMenuPosition(false) }
                      style={{
                        position: 'absolute',
                        bottom: '20px',  // Ajusta esta propiedad según la distancia que desees del borde inferior
                        left: '50%',     // Centra el botón horizontalmente
                        transform: 'translateX(-50%)', // Ajusta la posición centrada
                      }}
                    >
                      Continuar
                    </button>
                    </div>
                 </div> 
            </div>} 

             {contextShowMenuPeople &&
              <div className=" lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50   md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div className="bg-white p-4   rounded-lg  w-full h-full md:w-auto md:h-auto">
                  <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextShowMenuPeople(false)} ><IconRiCloseLargeLine /></button>
                        <div>
                              <h2 className="text-center text-2xl font-semibold mb-4">Selecionar adultos</h2>
                              <Search contextShowMenuPeople={contextShowMenuPeople}
                              top={715}
                              adults={adults}
                              childrem={childrem}
                              handChangeAdults={handChangeAdults}
                              handDecreaseAdults={handDecreaseAdults}
                              handChangeChildrem={handChangeChildrem}
                              handDecreaseChildren={handDecreaseChildren}
                              setContextShowMenuPeople={setContextShowMenuPeople}  />
                      </div>
                  </div> 
              </div>} 
                <div className="hidden lg:block  ">
                    {contextShowMenuPeople && 
                      <Search contextShowMenuPeople={contextShowMenuPeople}
                      top={580}
                      adults={adults}
                      childrem={childrem}
                      handChangeAdults={handChangeAdults}
                      handDecreaseAdults={handDecreaseAdults}
                      handChangeChildrem={handChangeChildrem}
                      handDecreaseChildren={handDecreaseChildren}
                      setContextShowMenuPeople={setContextShowMenuPeople}  />}
                </div>              
                </SectionSearch>
                <div >
                  <div className="p-2">
                    {FillContentPromotions()}
                  </div>
                    {FillContent()}
                    <Footer />
                </div>
               
            </div>
    );
}

export default Accommodation;


import React, { Fragment }  from "react";
import { ImginProduct, MainAccomodationRoom, MainProduct } from "../../Ui/Style/GeneralStyle";
import ButtonAccomodation from "../ButtonAccomodation/ButtonAccomodation";
import DescripctionAccomodation from "../DescripctionAccomodation/DescripctionAccomodation";
import TitleDinner from "../TitleDinner/TitleDinner";
import useCartActions from "../../Actions/useCartActions";
import { useSelector } from "react-redux";
import {toast} from "sonner"

const CardAccomodation =({ID,room_image,title,description,Price,cantidad,nights,person,Room,end,start,Price_nigth,promotion,totalCountAdults,max_people}) =>{
        
    const {AddCart } =useCartActions()
    
    const {cart} = useSelector(state => state.Cart);

    const originalPrice = Price; // Precio original
    const discountRate = 0.19; // 19% de descuento
    const discountedPrice = originalPrice * (1 - discountRate);
   
    const validPromotions =promotion ? discountedPrice :  Price

    const handleAddToCart = () => {
        let roomByID = 0
        Object.values(Room)
          .forEach((itemRoom) => {
            if(cart.every((item) =>item.roomByID != itemRoom)){
                roomByID = itemRoom
            }else{
                roomByID=roomByID
            }
          })
        if(roomByID !=0){
            AddCart({ID,room_image,title,Price:validPromotions,cantidad,nights,person,roomByID,end,start,quantity:1,Price_nigth})
        }else{
            toast.error("no habitacion disponible")
        }
    };

    return (   
            <MainAccomodationRoom className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8"   >     
            <MainProduct className="lg:flex block bg-white shadow-md"    >
                        <Fragment>
                            <TitleDinner />
                            <ImginProduct   className="w-auto" src={room_image}  alt="Hotel Image"/>
                        </Fragment>
                        <DescripctionAccomodation cantidad={cantidad}  description={description} title={title}  />
                        <ButtonAccomodation 
                                max_people={max_people}
                                totalCountAdults={totalCountAdults}
                                validPromotions={validPromotions}
                                promotion={promotion}
                                handleAddToCart={handleAddToCart}
                                price={Price} 
                                nights={nights}
                                person={person}  />
                    </MainProduct> 
            </MainAccomodationRoom>)
}

export default CardAccomodation




*/


/**
 * 
 * 
 * import React, {useEffect, useState} from 'react';
import Header from "../../Component/Header/Header"
import UseCart from "../../Hooks/UseCart"
import useReservationCreate from '../../Actions/useReservationCreate';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';
import moment from 'moment';
import EmpyCart from '../../Component/EmpyCart/EmpyCart';
import LoadingOverlay from '../../Component/LoadingCreateReserva/LoadingOverlay';
import useFormValues from '../../Hooks/useFormValues';
import useFetchData from '../../Hooks/useFetchData';
import useValidation from '../../Hooks/ValidateFormValues';
import HeaderCheckout from '../../Component/HeaderCheckout/HeaderCheckout';
import FormCheckout from '../../Component/FormCheckout/FormCheckout';
import Footer from '../../Component/Footer/Footer';
import ConfirmationMessage from '../../Component/ConfirmationMessage/ConfirmationMessage';
import WhatsappButton from '../../Component/WhatsappButton/WhatsappButton';

const Checkout  =() =>{
    useFetchData();

    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);
    const [formErrors, setFormErrors] = useState({});
    const [formValues, handleChange] = useFormValues();
    const {cart,getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    const {PostCreateHotel} =useReservationCreate()
    const {Country,loading,reservation}= useSelector(state => state.Reservation);
    const {loadingCart} = useSelector(state => state.Cart);
    const cardNumberArray = formValues.cardNumber.split(" ");
    const cardNumberString = cardNumberArray.join("");
    const now = moment().format('YYYY-MM-DD');
    const validate = useValidation();


    const handleSubmit = async(e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
        await PostCreateHotel({ cart,
                                  name:formValues.name,
                                  apellido:formValues.apellido,
                                  email:formValues.email,
                                  city:formValues.city,
                                  country:formValues.country,
                                  phone:formValues.phone,
                                  fecha:now,
                                  number:cardNumberString,
                                  exp_month:formValues.expiryMonth,
                                  exp_year:formValues.expiryYear,
                                  cvc:formValues.cvc,
                                  card_holder:formValues.cardName,
                                  subtotal
                                  })
        
       
        } 
    };



    /*const togglePanel = () => {
      setIsOpen(!isOpen);
    };
*/

/*const FillContent =() =>{

    if(Boolean(reservation)){
        return ( <ConfirmationMessage title={"Tu reserva ha sido creada"} />)
    }

    if(!subtotal > 0){
        return (  <EmpyCart title={"Carrito vacio"} />)
    }else{
        return <FormCheckout 
                  Country={Country}
                  loading={loading}
                  handleSubmit={handleSubmit}
                  formErrors={formErrors}
                  handleChange={handleChange}
                  formValues={formValues}
                  cart={cart}
                  subtotal={subtotal}
            />
    }
}



return (<>
    <Header />
    {loadingCart && <LoadingOverlay title={"Cargando..."} />}
    {loading && <LoadingOverlay title={"Creando reserva..."} />}  
    <HeaderCheckout />
    <WhatsappButton />
    <Toaster position="bottom-right"  richColors   />  
        {FillContent()}
        <Footer />
        </>)

}

export default Checkout

import React from "react"
import moment from "moment";
import useCartActions from "../../Actions/useCartActions";
import { IconRiDeleteBinLine } from "../Icons/Icons";

const CardCheckout =({room_image,title,Price,nights,person,end,start,Price_nigth,roomByID}) =>{

    const {RemoveCart} = useCartActions()
    
    const dateStart=  moment(start).format('YYYY-MM-DD');
    const dateEnd=  moment(end).format('YYYY-MM-DD');

    const handletoRemoveCart =() =>{
        RemoveCart({roomByID})
    }

    return ( <div className="border-b border-y-black" >
                <div className="  mb-4 flex  justify-between items-end">
                    <div className="text-gray-700  mt-3 text-sm">
                            <p className="text-sm  font-semibold">{title}</p>
                            <p className="font-normal text-[13px]" >Entrada: <span className="font-normal text-[13px]">{dateStart} 3:00 pm</span></p>
                            <p className="font-normal text-[13px]" >Salida: <span className="font-normal text-[13px]">{dateEnd} 1:00 pm</span></p>
                            <p className="font-normal text-[13px]" >Regimen/plan: <span className="font-normal text-[13px]">Alojamiento y desayuno</span></p>
                            <p className="font-normal text-[13px]">ocupación: <span className="font-normal text-[13px]">{person} adultos</span></p>
                            <p className="font-normal text-[13px]">Noches: <span className="font-normal text-[13px]">{nights} </span></p>
                    </div>
                    <div className=" text-right">
                            <span className="text-2xl font-bold">${parseInt(Price).toLocaleString('es-CO')} cop</span>
                    </div>
                </div>
                <div className="   text-black rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                    <img 
                        src={room_image}
                        alt="Standard Doble" 
                        className="w-24 h-24 object-cover mr-4 rounded-lg"
                    />
                        <p>{title}</p>
                    <div>
                    
                    </div>
 
                    <div>
                        <button className="text-red-500 hover:text-red-200">
                                <IconRiDeleteBinLine   handSubmit={handletoRemoveCart}  />
                    </button>
                    </div>
                    </div>
                   
                </div>
            </div>
    )

}

export default CardCheckout 

 * 
 */