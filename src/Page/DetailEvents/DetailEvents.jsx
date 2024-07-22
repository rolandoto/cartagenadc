import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const DetailEvents =() =>{

    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);

    let { userId } = useParams();

    const eventData = [
       
        {
         id:1,
         title: "¡Sumérgete en el universo de la moda en Colombiamoda 2024!",
         description: "Del 23 al 25 de julio, Medellín se convierte en el epicentro de la moda latinoamericana con Colombiamoda 2024, un evento imperdible para diseñadores, empresarios, amantes de la moda y el público en general.",
         descriptionFull:"Del 23 al 25 de julio, Medellín se convierte en el epicentro de la moda latinoamericana con Colombiamoda 2024, un evento imperdible para diseñadores, empresarios, amantes de la moda y el público en general.",
         finally:"¡No te pierdas esta oportunidad única de vivir la moda en su máxima expresión!",
         subtitle:"Colombiamoda",
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
         imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-12%20at%209.26.10%20AM.jpeg?raw=true"
        },
        {
            id:2,
            title: "¡Vive la magia de la Feria de las Flores en el corazón de Medellín!",
            description: "¿Sueñas con sumergirte en el vibrante universo de la Feria de las Flores? Hospédate en nuestro hotel, ubicado en el corazón de Medellín, y vive una experiencia inolvidable llena de color, música y tradición.",
            descriptionFull:"La Feria de las Flores, del 2 al 11 de agosto, te invita a un torbellino de emociones:",
            finally:"No te pierdas la oportunidad de vivir la magia de la Feria de las Flores en Medellín. Reserva tu habitación en nuestro hotel hoy mismo y prepárate para una experiencia inolvidable. ",
            subtitle:"¿Sueñas con sumergirte en el vibrante universo de la Feria de las Flores? Hospédate en nuestro hotel, ubicado en el corazón de Medellín, y vive una experiencia inolvidable llena de color, música y tradición.",
            highlights: [
                "Desfile de Silleteros: Maravíllate con la majestuosidad de las silletas, obras de arte florales sobre la espalda de los campesinos antioqueños.",
                "Conciertos: Disfruta de ritmos colombianos e internacionales en diferentes escenarios de la ciudad.",
                "Exposiciones: Admira la belleza de las flores en Jardines Botánicos, Parques y Plazuelas.",
                "Desfile de Flotadores: Sorpréndete con la creatividad y el ingenio de los carros alegóricos iluminados.",
                "Cabalgata: Vive la emoción de la tradicional cabalgata por las calles de Medellín.",
                "Torneo de Tiro al Blanco: Disfruta de la adrenalina y la precisión de este deporte ancestral.",
                "Festivales gastronómicos: Degusta los sabores típicos de Antioquia y Colombia en diferentes eventos culinarios.",
                "Y mucho más: Además de estos eventos principales, la Feria de las Flores ofrece una gran variedad de actividades para todos los gustos, desde exposiciones de arte hasta muestras culturales y eventos deportivos."
              ],
           hotelDetails: [
                "Ubicación privilegiada: A pasos de los principales escenarios de la Feria y de las atracciones turísticas de Medellín",
                "Comodidades excepcionales: Habitaciones confortables, Wi-Fi gratuito y bar restaurante.",
                "Atención personalizada: Un equipo atento y servicial que te ayudará a planificar tu visita a la Feria   ",
                
              ],
            breveDescriptions:"Hospédate en Gallery hotel y disfruta de:",
            imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-19%20at%202.14.18%20PM.jpeg?raw=true"
           }
     ];

    const SearFindEvents =  eventData.find((item) => item.id == userId)

    return (<>
               <Header/>
               <div className="relative bg-cover bg-center h-[410px]" style={{ 
                backgroundImage: `url(https://github.com/rolandoto/image-pms/blob/main/_MG_4223.jpg?raw=true)`,}}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora">
                           Eventos
                        </h1>
                    </div>
                </div>

                {SearFindEvents ? 
                <div className="mx-auto max-w-4xl p-6 mb-24">
                    <h1 className="text-[30px] text-center text-yellow-500   font-lora  mb-6">{SearFindEvents.title}</h1>
                        <div className=" w-full p-4">
                            <img
                                    src={SearFindEvents.imageUrl}
                                    alt="Room"
                                    className="w-full h-[500px] object-center rounded-lg shadow-lg"
                                
                                />
                        </div>
                        <span className="text-2xl font-lora text-black mb-4" >{SearFindEvents.subtitle}: </span>
                        <div className=" md:pl-6 mt-8 md:mt-3">
                            <p className="text-gray-700 text-justify	 mb-4">{SearFindEvents.descriptionFull}</p>
                            <ul className="list-disc list-inside  text-justify text-gray-700 mb-4">
                            {SearFindEvents.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                            </ul>
                            <p className="text-gray-700  text-justify	 mb-4">
                                {SearFindEvents.breveDescriptions}
                            </p>
                            <ul className="list-disc list-inside  text-justify text-gray-700 mb-4">
                            {SearFindEvents.hotelDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                            </ul>
                        </div>
                    <h1 className="text-[20px] text-black  font-lora  mb-6">{SearFindEvents.finally}</h1>
                </div>
              : 
              <div className="mx-auto max-w-4xl text-center p-6 mb-24" >
                    <span className="text-2xl text-center font-mono text-black mb-4" >Evento no disponible </span>
              </div>
              }
              <Footer/>
            </>)

}

export default  DetailEvents