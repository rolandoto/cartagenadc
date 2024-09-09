import React, { useState } from 'react';
import UseEventsActions from '../../Actions/useEventsActions';
import { useSelector } from 'react-redux';
import { Button } from '@nextui-org/react';
import LoadingOverlay from '../../Component/LoadingCreateReserva/LoadingOverlay';
import { useParams } from 'react-router-dom';
import { Toaster } from 'sonner';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importa los estilos


const InsertEvents =() =>{  

    const {id} =useParams()
    const {postCreateEvents} =UseEventsActions()    
    const {events,loadingCreateEvents,errorEvents}= useSelector(state => state.Events);

    const [formData, setFormData] = useState({
        nombreEvento: '',
        fechaInicio: '',
        fechaFin: '',
        lugar: '',
      });

  
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const [text, setText] = useState("");

    const handleTextChange = (value) => {
      setText(value);
    };


    const handleSubmit = (e) => {
         e.preventDefault();
         postCreateEvents({ Name:formData.nombreEvento,
                            Description:text,
                            Start_date:formData.fechaInicio,
                            End_date:formData.fechaFin,
                            Place:formData.lugar,
                            id_hotel:id,
        })  
    };
    

    return (<>
        <Toaster position="bottom-right"  richColors   />  
            {loadingCreateEvents && <LoadingOverlay title={"Cargando..."} />}
            <form className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-4"></h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre del Evento</label>
                        <input
                        type="text"
                        name="nombreEvento"
                        value={formData.nombreEvento}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Fecha de Inicio del evento</label>
                        <input
                        type="date"
                        name="fechaInicio"
                        value={formData.fechaInicio}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Fecha de Fin  del envento</label>
                        <input
                        type="date"
                        name="fechaFin"
                        value={formData.fechaFin}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Lugar</label>
                        <input
                        type="text"
                        name="lugar"
                        value={formData.lugar}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    
                        />
                    </div>

                    <ReactQuill
                        value={text}
                        onChange={handleTextChange}
                        theme="snow"
                        placeholder="Escribe aquí..."
                    />
                    
                    <Button
                        type="submit"
                        color='success'
                        className="mt-5 w-full text-white p-2 rounded"
                        >
                        Subir evento
                    </Button>
                </form>
        </>)

}

export default InsertEvents


