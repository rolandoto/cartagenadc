import React from "react"


const TitleWelcome  =() =>{

    return (
            <div className="flex flex-col  mt-[260px] lg:mt-24  mx-auto max-w-7xl  md:flex-row items-center my-12 p-4">
               <div className="md:w-1/2 p-4">
               <img
                    src="https://grupo-hoteles.com/storage/app/6/rooms/1068378615-14-rooms-slider-1-_MG_1836.jpg"
                    alt="Room"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                    </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-normal text-yellow-500  mb-4 font-lora text-[30px] text-center ">¡Donde la comodidad y el descanso se encuentran!</h2>
                <p className="text-gray-700 text-justify	 mb-4">
                    Ubicado en el barrio El Amparo, en la vibrante zona industrial de Cartagena, el Hotel Cartagena DC es el lugar ideal para quienes visitan la ciudad por negocios o placer. Con un enfoque en la comodidad y la funcionalidad, el hotel ofrece amplias instalaciones, incluyendo un parqueadero privado para tu conveniencia, una piscina donde podrás relajarte y un restaurante que deleitará tu paladar con una variedad de opciones gastronómicas. 
                </p>
              
                </div>
            </div>)

}

export default TitleWelcome