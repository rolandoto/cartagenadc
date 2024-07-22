import React from "react";
import CardEvents from "../CardEvents/CardEventjs";

const Events =()  =>{
    const eventData = [
       {    
        id:1,
        title: "¡Sumérgete en el universo de la moda en Colombiamoda 2024!",
        description: "Del 23 al 25 de julio, Medellín se convierte en el epicentro de la moda latinoamericana con Colombiamoda 2024, un evento imperdible para diseñadores, empresarios, amantes de la moda y el público en general.",
        descriptionFull:"Un encuentro con la artesanía, la memoria y las costumbres ancestrales de Colombia te espera en Expoartesano 2024, del 5 al 14 de julio en Plaza Mayor Medellín. Sumérgete en un universo de colores, texturas y saberes populares donde más de 500 artesanos de todo el país exhiben sus creaciones únicas y llenas de historia. Descubre la maestría de las técnicas tradicionales y déjate sorprender por la innovación y el talento de los nuevos artistas.",
        subtitle:"Colombiamoda",
        highlights: [
            "Pasarelas con las últimas tendencias de diseñadores colombianos e internacionales.",
            "Salas de exposición donde podrás descubrir nuevas marcas y productos.",
            "Conferencias y talleres con expertos de la industria de la moda.",
            "Ruedas de negocios para conectar con compradores y proveedores",
            "Un espacio para la reflexión sobre el futuro de la moda en un mundo sostenible."
          ],
          hotelDetails: [
            "Un hotel temático en el corazón de Medellín, cerca de Plaza Mayor Medellín, donde se desarrolla Colombiamoda.",
            "Habitaciones modernas y confortables con un toque de arte colombiano",
            "Desayuno típico incluido y con productos locales.",
            "Desayuno incluido, con productos de la región.",
            "Atención personalizada y servicio de recepción las 24 horas.",
            "Parqueadero (Sujeto a disponibilidad)"
          ],
          imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-12%20at%209.26.10%20AM.jpeg?raw=true",
       },
       
       {
        id:2,
        title: "¡Vive la magia de la Feria de las Flores en el corazón de Medellín!",
        description: "¿Sueñas con sumergirte en el vibrante universo de la Feria de las Flores? Hospédate en nuestro hotel, ubicado en el corazón de Medellín, y vive una experiencia inolvidable llena de color, música y tradición.",
        descriptionFull:"Del 23 al 25 de julio, Medellín se convierte en el epicentro de la moda latinoamericana con Colombiamoda 2024, un evento imperdible para diseñadores, empresarios, amantes de la moda y el público en general.",
        finally:"¡No te pierdas esta oportunidad única de vivir la moda en su máxima expresión!",
        subtitle:"La Feria de las Flores, del 2 al 11 de agosto, te invita a un torbellino de emociones",
        highlights: [
            "Pasarelas con las últimas tendencias de diseñadores colombianos e internacionales.",
            "Salas de exposición donde podrás descubrir nuevas marcas y productos",
            "Conferencias y talleres con expertos de la industria de la moda.",
            "Ruedas de negocios para conectar con compradores y proveedores.",
            "Un espacio para la reflexión sobre el futuro de la moda en un mundo sostenible."
          ],
       hotelDetails: [
            "Un hotel temático en el corazón de Medellín, cerca de Plaza Mayor Medellín, donde se desarrolla Colombiamoda.",
            "Habitaciones modernas y confortables con un toque de arte colombiano.",
            "Desayuno incluido, con productos de la región.",
            "Atención personalizada y servicio de recepción las 24 horas o	arqueadero (Sujeto a disponibilidad)",
          ],
       breveDescriptions:"Y para completar tu experiencia en Medellín, te invitamos a hospedarte en el Gallery Hotel ",
        imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-19%20at%202.14.18%20PM.jpeg?raw=true"
       }
    ];
    return (
        <>
         <div className="   mx-auto max-w-7xl p-6" >
                <h1 className="text-[30px] text-center text-yellow-500   font-lora  mb-6">Próximos eventos en Medellín</h1>
                <div className="grid sm:grid-cols-1  gap-5   md:grid-cols-2 ">  
                      {eventData.map((item,e ) => (
                         <CardEvents key={e} {...item} />
                      ))}
              </div>
            </div>
        </>
    )
}
export default Events