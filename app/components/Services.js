"use client"
import React from 'react';
import {motion} from "framer-motion"
import Link from 'next/link';
import BookNowButton from './BookNowButton';
const ServicesCard = ({ title, description, image }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative bg-cover bg-center h-96 overflow-hidden rounded-md"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-2xl text-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-base">{description}</p>
          
        <Link  href={"https://google.com"}>
         <div className='my-20'>
            <BookNowButton/>
         </div>
        </Link>
          </div>
          
        </div>
      </motion.div>
    );
  };
const Services = () => {
    return (
        <div className='mx-2'>
        <div className='p-8'>
        <h3 className='text-center text-bold text-3xl text-gray-700'>Our services</h3>
        <p className='border-b-4 w-1/2 border-yellow-400 text-center ml-auto mr-auto my-2 rounded-lg'></p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServicesCard title={"Personal Care"} image={"https://www.aandrssolutionsltd.co.uk/services1.png"} description="Supporting an individual with personal hygiene and toileting, along with dressing and maintaining your personal appearance." />
            <ServicesCard  title={"Support"}  image={"https://www.aandrssolutionsltd.co.uk/services2.png"} description="Providing assistant to an individual with disabilities, making sure they are comfortable with the perfect home care serive." />
            <ServicesCard  title={"Health Care"}  image={"https://www.aandrssolutionsltd.co.uk/services3.png"} description="Supporting individuals  with complex healthcare needs or require constant assistance with activities of daily living." />
        </div>
        </div>
    );
}

export default Services;
