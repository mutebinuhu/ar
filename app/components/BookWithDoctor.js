import React from 'react';
import AppointmentForm from './AppointmentForm';
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
            <AppointmentCards icon={"icon"} name={"Address"} description={"Northam Road, S0140PF, UK"}/>
            <AppointmentCards icon={"icon"} name={"Working Hours"} description={" MON - FRI: 08:00AM - 20:00PM Saturday and Sunday: Closed"}/>
            <AppointmentCards icon={"icon"} name={"Write To uS"} description={"info@arssolutions.co.uk jolly@arssolutions.co.uk  support@arssolutions.co.uk"}/>
            <AppointmentCards icon={"icon"} name={"Call Us"} description={" +44 (0) 2380011767                                    "}/>

            <p className="">
                <strong>Notes submitted to the Attendance Office must include following:</strong>
            </p>
            <ul class="list-checkmark list-unstyled">
                <li>Praesent pellentesque nunc vel velit varius feugiat.</li>
                <li>Suspendisse vel ex vitae velit dignissim faucibus.</li>
                <li>Integer congue erat vel bibendum volutpat.</li>
                <li>Nunc nec quam dapibus, placerat est in, tincidunt nibh.</li>
                <li>Sed facilisis velit sit amet purus mattis, id rutrum leo scelerisque.</li>
                <li>testing......</li>
            </ul>
            <aside class="alert alert-success">
                <strong>Notes — </strong>
                <span>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its .
                </span>
            </aside>

        <div>
            
        </div>

        <AppointmentForm/>
        </div>
    );
}

export default BookWithDoctor;
