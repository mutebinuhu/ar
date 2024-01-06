"use client"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Banner = () => {

    const images = [
        "https://img.freepik.com/free-photo/old-man-woman-sitting-yellow-sofa-with-nurse_23-2148238969.jpg?size=626&ext=jpg&ga=GA1.1.747265034.1700643698&semt=ais",
        "https://img.freepik.com/free-photo/you-have-heartbeat-like-young-man_637285-7858.jpg?w=826&t=st=1704517661~exp=1704518261~hmac=3caad60d6e046af1b5840ae0c22302f25977d0b75fcaad50e2b4fa1cd57b6404",
        "https://img.freepik.com/premium-photo/friendly-relationship-smiling-caregiver-uniform-happy-elderly-woman-supportive-young-nurse-looking-senior-woman_1212-2337.jpg?w=826",
    ];

    const buttonStyle = {
        
        background: '',
        border: '0px'
    };
   
    
    const properties = {
        prevArrow: <button className=' w-10 bg-gray-800 opacity-70 rounded-full' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>,
        nextArrow: <button className='w-10 text-white  bg-gray-800 opacity-70 rounded-full' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>
    }

    const BannerHeaders = ({title, subTitle}) => {
        return(
            <div>
                        <h1 className='text-3xl font-bold'> {title} </h1>
                        <p>
                        
                       {subTitle}
                        </p>
                    </div>
        )
    }
    return (
        <div>
            

            <Slide {...properties}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                   <div>
                   <h2 className='text-3xl font-bold'>
                       
                    </h2>
                    <p className='py-10'>
                    </p>
                   </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                 
                    <BannerHeaders title="" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div>
                        <h2  className='text-3xl font-bold'></h2>
                        <p>
                       
                        </p>
                    </div>
                </div>
            </div>
        </Slide>
        
        </div>
    );
}

export default Banner;
