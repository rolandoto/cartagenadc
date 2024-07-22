import React from "react";
import { BorderInput, BorderInputInitial, ButtonSearch, ContainerButtonSearch, MainAccomodation, MainAccomodationRoomSearch, MainProduct } from "../../Ui/Style/GeneralStyle";

const CalenderSearch =({HandClickMenuPeople,
                        HandClickMenuEnd
                        ,HandClickMenu,
                        onsubmit,
                        formattedStartDateToString,
                        formattedEndDateToString,
                        totalCountAdults}) =>{

    return (
        <MainAccomodationRoomSearch className="  lg:flex   mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
            <MainProduct className="mx-auto  	 lg:flex  items-center justify-between p-4 rounded-lg shadow-2xl ">
                           
                            <BorderInputInitial className="flex flex-col hover-punter "  onClick={HandClickMenu}>
                                    <span className="mb-2 font-medium" >Llegada :</span>
                                    <span>  {formattedStartDateToString === 'fecha inválida' ? '-- / -- / --' : formattedStartDateToString}</span>
                            </BorderInputInitial>
                            <BorderInput className="flex flex-col  hover-punter" onClick={HandClickMenuEnd}>
                                    <span className="mb-2 font-medium">Salida:</span>
                                    <span>{formattedEndDateToString === 'fecha inválida' ? '-- / -- / --' : formattedEndDateToString}</span>
                            </BorderInput>

                            <BorderInput className="flex flex-col hover-punter" onClick={HandClickMenuPeople}  >
                                <span className="mb-2 font-medium">Personas:</span>
                                <span>{totalCountAdults} </span>
                            </BorderInput>
                            <ContainerButtonSearch className="flex flex-col ">
                                <ButtonSearch className=" lg:hidden  block  w-full bg-yellow-500 text-white py-4    rounded hover:bg-yellow-500 transition duration-200" onClick={onsubmit}>
                                        Buscar
                                </ButtonSearch>

                                <ButtonSearch className=" hidden  lg:block w-[150px]   bg-yellow-500 text-white py-4    rounded hover:bg-yellow-500 transition duration-200" onClick={onsubmit}>
                                        Buscar
                                </ButtonSearch>
                            </ContainerButtonSearch>
            </MainProduct>
            </MainAccomodationRoomSearch>    
    )
}

export default CalenderSearch