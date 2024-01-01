"use client"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Banner = () => {

    const images = [
        "https://care.arssolutionsltd.co.uk/assets_web/img/placeholder/slider.png",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
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
                        Introducing a new information system 
                    </h2>
                    <p className='py-10'>
                        where one is already in place and is actively used
                    </p>
                   </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                 
                    <BannerHeaders title="Hospital Information System (HIS) basically  is a synonym for information management " subTitle="Hospital Information System (HIS) basically  is a synonym for information management" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div>
                        <h2  className='text-3xl font-bold'>General Requirements– An Overview</h2>
                        <p>
                        Generally, the
                         system should be safe and secure from a data management point-of-view.
                        </p>
                    </div>
                </div>
            </div>
        </Slide>
        </div>
    );
}

export default Banner;
