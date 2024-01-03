import React from 'react';
import Ad from './Ad';

const BookingOne = () => {
    return (
        <section className='px-2 py-6'>
                <h2 className='font-bold text-4xl text-gray-800 text-center'>
                Enriching Life's Chapters through Tailored <br/> <span className='bg-blue-500 text-gray-100'> Homecare Services</span>
                    </h2>
                    <div className='py-4 font-bold text-gray-800 text-center'>
                        <p>Lets start the journey together</p>
                        <div className='my-4'>
                            <button className='bg-blue-500 py-2 px-3 rounded text-white '>Book Now</button>
                        </div>
                        <div className='my-4'>
                            <button className='border-2 py-2 px-3 rounded border-blue-500 '>Looking for Job ?</button>
                        </div>
                    </div>
                    <Ad action="Book Now" info="We can provide live-in care in as little&nbsp;as&nbsp;" em="24 hours"/>
               
        </section>
    );
}

export default BookingOne;
