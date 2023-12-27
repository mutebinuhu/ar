import React from 'react';
const AppointmentCards = ({icon, name, description}) =>{
   return(
    <div>
    <div>{icon}</div>
    <div>{name}</div>
    <div>{description}</div> 
 </div>
   )
}

const BookWithDoctor = () => {
    return (
        <div>
            <h2>Book with your doctor</h2>
            <p>Some up and coming trends are healthcare consolidation for independent healthcare centers that see a reduction in unexpected payments.</p>
            <AppointmentCards icon={"icon"} name={"name"} description={"description"}/>
            <AppointmentCards icon={"icon"} name={"name"} description={"description"}/>
            <AppointmentCards icon={"icon"} name={"name"} description={"description"}/>
            <AppointmentCards icon={"icon"} name={"name"} description={"description"}/>

        </div>
    );
}

export default BookWithDoctor;
