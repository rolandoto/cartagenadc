import React from "react";

const CardRoomDetail =({features,image,title,price}) =>{

    return (
        <div  className="  p-6 rounded-lg relative ">
              <img
                src={image}
                width="100" 
                height="100"
                alt={title}
                className="w-full h-auto md:h-[250px] object-cover rounded-lg mb-4"
            />
                <h3 className=" words  text-yellow-500 text-[23px]  mb-4">{title}</h3>
                <ul className="text-gray-700 h-[180px] text-left list-disc list-inside">
                {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
               
                </ul>        
                <div className="PriceRoomDetail">
                    <div >
                        <strong className=" text-[20px] " >Desde ${parseInt(price).toLocaleString('es-CO')} cop</strong>
                    </div>
                </div>
                                
        </div>
    )
}

export default CardRoomDetail