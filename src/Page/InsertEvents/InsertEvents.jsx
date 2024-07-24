import React, { useState } from 'react';
import UseEventsActions from '../../Actions/useEventsActions';
import { useSelector } from 'react-redux';
import { Button } from '@nextui-org/react';
import LoadingOverlay from '../../Component/LoadingCreateReserva/LoadingOverlay';
import { useParams } from 'react-router-dom';
import { Toaster } from 'sonner';


const InsertEvents =() =>{  

    const {id} =useParams()
    const {postCreateEvents} =UseEventsActions()    
    const {events,loadingCreateEvents,errorEvents}= useSelector(state => state.Events);

    const [formData, setFormData] = useState({
        nombreEvento: '',
        fechaInicio: '',
        fechaFin: '',
        lugar: '',
        descriptionEvent1: '',
        actividades1: [{ tipo: '', descripcion: '',type:"actividades1" }],
        descriptionEvent2: '',
        actividades2: [{ tipo: '', descripcion: '',type:"actividades2" }],
        finally: ""
      });


    console.log(formData)

      const handleActividadChange = (index, e, tipoActividades) => {
        const { name, value } = e.target;
        const newActividades = formData[tipoActividades].map((actividad, i) =>
          i === index ? { ...actividad, [name]: value } : actividad
        );
        setFormData({ ...formData, [tipoActividades]: newActividades });
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const addActividadEvent1 = () => {
        setFormData({
          ...formData,
          actividades1: [...formData.actividades1, { tipo: '', descripcion: '',type:"actividades1"}]
        });
      };

      const addActividadEvent2 = () => {
        setFormData({
          ...formData,
          actividades2: [...formData.actividades2, { tipo: '', descripcion: '',type:"actividades2" }]
        });
      };

      const removeActividadEvent1 = (index) => {
        setFormData({
        ...formData,
        actividades1: formData.actividades1.filter((_, i) => i !== index)
        });
    };
      
    const removeActividadEvent2 = (index) => {
        setFormData({
        ...formData,
        actividades2: formData.actividades2.filter((_, i) => i !== index)
        });
    };

    const handleSubmit = (e) => {
         e.preventDefault();
         postCreateEvents({Name:formData.nombreEvento,
                            DescriptionEvent1:formData.descriptionEvent1,
                            DescriptionEvent2:formData.descriptionEvent2,
                            Start_date:formData.fechaInicio,
                            End_date:formData.fechaFin,
                            Place:formData.lugar,
                            id_hotel:id,
                            actividades1:formData.actividades1,
                            actividades2:formData.actividades2,
                            Finally:formData.finally
        })  
    };
    

    return (<>
        <Toaster position="bottom-right"  richColors   />  
            {loadingCreateEvents && <LoadingOverlay title={"Cargando..."} />}
            <form className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-4">Colombiamoda 2024</h2>

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
                    <div className="mb-4 border-r">
                        <label className="block text-gray-700">Descripción del Evento  1 </label>
                        <textarea
                        name="descriptionEvent1"
                        value={formData.descriptionEvent1}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700"></label>
                        {formData.actividades1.map((actividad, index) => (
                        <div key={index} className="mb-2">
                            <input
                            type="text"
                            name="tipo"
                            placeholder="Tipo"
                            value={actividad.tipo}
                            onChange={(e) => handleActividadChange(index, e, 'actividades1')}
                            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
                        
                            />
                            <textarea
                            name="descripcion"
                            placeholder="Descripción"
                            value={actividad.de}
                            onChange={(e) => handleActividadChange(index, e, 'actividades1')}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            
                            ></textarea>
                        {index >= 1 && (
                            <Button 
                                color='danger'
                                type="button"
                                onClick={() => removeActividadEvent1(index)}
                                className=" text-white p-2 rounded mt-2"
                            >
                                Eliminar Actividad
                            </Button>
                        )}
                
                        </div>
                        ))}
                        <Button
                        color='primary'
                        type="button"
                        onClick={addActividadEvent1}
                        className=" text-white p-2 rounded"
                        >
                        Añadir Actividad 2
                        </Button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Descripción del Evento  2 </label>
                        <textarea
                        name="descriptionEvent2"
                        value={formData.descriptionEvent2}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        {formData.actividades2.map((actividad, index) => (
                        <div key={index} className="mb-2">
                            <input
                            type="text"
                            name="tipo"
                            placeholder="Tipo actividad 2"
                            value={actividad.tipo}
                            onChange={(e) => handleActividadChange(index, e, 'actividades2')}
                            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
                        
                            />
                            <textarea
                            name="descripcion"
                            placeholder="Descripción evento 2"
                            value={actividad.descripcion}
                            onChange={(e) => handleActividadChange(index, e, 'actividades2')}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            ></textarea>
                        {index >= 1 && (
                            <Button
                                color='danger'
                                type="button"
                                onClick={() => removeActividadEvent2(index)}
                                className=" text-white p-2 rounded mt-2"
                            >
                                Eliminar Actividad
                            </Button>
                        )}
                        </div>
                        ))}

                        <Button
                        color='primary'
                        type="button"
                        onClick={addActividadEvent2}
                        className=" text-white p-2 rounded"
                        >
                        Añadir Actividad 2
                        </Button> 

                       
                    </div>
                    <div  className="mb-2">
                        <input
                            type="text"
                            name="finally"
                            placeholder="Final "
                            value={formData.finally}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
                            />
                        </div>
                    <Button
                        type="submit"
                        color='success'
                        className=" w-full text-white p-2 rounded"
                        >
                        Subir evento
                    </Button>
                </form>
        </>)

}

export default InsertEvents


