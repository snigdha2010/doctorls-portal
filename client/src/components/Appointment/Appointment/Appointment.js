import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const  [appointmentDate, setAppointmentDate ] = useState(new Date())
    const handleDateChange = date =>{
        setAppointmentDate(date)
    }
    return (
        <div>
            <NavBar/>
            <h1>This is appointment</h1>
            <AppointmentHeader  handleDate={handleDateChange}></AppointmentHeader>
            <BookAppointment date={appointmentDate}></BookAppointment>
        </div>
    );
};

export default Appointment;