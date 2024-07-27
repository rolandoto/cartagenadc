import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';  // Import Spanish locale

moment.locale('es');  // Set locale to Spanish

const PanelPromotion = () => {
  const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
  const [activeDays, setActiveDays] = useState([]);
  const id_hotel = 13; // ID del hotel

  const handleCheckboxChange = (index) => {
    setActiveDays(prevDays => {
      const dayNumber = index + 1; // Convertir el índice a número de día (1-7)
      const dayFormat = moment().day(dayNumber).format('d'); // Nombre completo del día de la semana

      if (prevDays.some(day => day.day_number === dayFormat)) {
        // Eliminar el día si ya está en la lista
        return prevDays.filter(day => day.day_number !== dayFormat);
      } else {
        // Agregar el nuevo día
        return [...prevDays, { day_number: dayFormat, id_hotel }];
      }
    });
  };

  const handleSave = () => {
    const promotionDays = activeDays.map(index => {
      const adjustedIndex = (index + 1) % 7;
      return moment().day(adjustedIndex).format('d'); // 'd' returns day of week (0-6)
    });
  };

  const isTodaySelected = () => {
    const todayIndex = moment().format('d'); // Obtiene el nombre completo del día actual
    return activeDays.some(day => day.day_number === todayIndex); // Verifica si el nombre del día actual está en activeDays
  };
 
  return (
    <div className="container mx-auto p-4">
    <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Activar Promoción</h2>
        <div className="border rounded">
            <div className="flex border-b">
                <div className="w-1/4 p-2"></div>
                <div className="w-3/4 flex">
                    {weekdays.map((day, index) => (
                        <div key={index} className="flex-1 p-2 text-center font-semibold">
                            {day} ({(index + 1) % 7})
                        </div>
                    ))}
                </div>
            </div>
            {/* Activar Promoción Row */}
            <div className="flex border-b">
                <div className="w-1/4 p-2 font-semibold">Activar Promoción</div>
                <div className="w-3/4 flex">
                    {weekdays.map((_, index) => (
                        <div key={index} className="flex-1 p-2 flex justify-center items-center">
                            <input 
                                type="checkbox" 
                                className="form-checkbox h-5 w-5"
                                checked={activeDays.some(day => day.day_number === moment().day(index + 1).format('d'))}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

        <div className="mt-4 flex justify-end space-x-2">
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                    handleSave();
                    if (isTodaySelected()) {
                        alert('El día de hoy está activo.');
                    } else {
                        alert('El día de hoy no está activo.');
                    }
                }}
            >
                GUARDAR
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">CANCELAR</button>
        </div>
        </div>
  );
};

export default PanelPromotion;
