import React from 'react';

const Info = ({data}) =>{
return(
    <div>
        {data}
    </div>
)
}

const HighLights = () => {
    return (
        <div>
          <section>
          <h2>Doctors schedule</h2>
          <p>
            The following is for guidance only to help you plan your appointment with a preferred doctor or nurse.
          </p>
          <button>View schedule</button>
          </section>

          <section>
          <h2>Our benefits</h2>
          <ul>
            <li>Qualified staff of doctors</li>
            <li>Save your money and time with us</li>
            <li>Emergency service around the clock</li>
            <li>Qualified staff of doctors</li>
            <li>Feel like you are in home services</li>
          </ul>
          <button>View schedule</button>
          </section>


          <section>
          <h2>Our working hours</h2>
          <p>It is a long established fact that the reader will.</p>
          <ul>
            <li>Monday-Wednesday	08.00-18.00</li>
            <li>Thursday-Friday	08.00-18.00</li>
            <li>Saturday	08.00-18.00</li>
            <li>Sunday	Closed</li>
          </ul>
          <button>View schedule</button>
          </section>


        </div>
    );
}

export default HighLights;
