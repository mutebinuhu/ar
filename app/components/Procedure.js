"use client"
import React from 'react';
import {motion} from "framer-motion"
const timelineItems = [
    {
      id: 1,
      title: '1. Speak to our team',
      icon:'fa-phone-volume',
      text: 'Call our team of experts on +447475189603 to talk through your options and any questions you may have regarding your care.',
    },
    
    {
      id: 2,
      title: '2. A free home care assessment',
      icon:'fa-solid fa-house',
      text: 'Your local Helping Hands manager will visit you to discuss your requirements and learn about the type of care you’re after.',
    },
    {
      id: 3,
      icon:'fa-solid fa-gift',
      title: '3. Create a bespoke care package',
      text: "We'll ensure you have the right care and support in place that fits around your needs and preferences.",
    },
  ];
  
const Timeline = () => {
    return (
      <div className="max-w-2xl mx-auto mt-10 w-full mx-4">
        {timelineItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center mb-2">
              <div className={`bg-yellow-400 shadow-lg flex justify-center items-center rounded-full h-12 w-12 mr-3 `}><i className={`fa-solid ${item.icon}`}></i></div>
              <div className="text-gray-600 font-bold">{item.title}</div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              {item.text}
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
const Procedure = () => {
    return (
        <div className='mx-2'>
            <h3 className='text-center text-bold text-3xl text-gray-700'>How to begin your care journey</h3>
            <p className='border-b-4 w-1/2 border-yellow-400 text-center ml-auto mr-auto my-2 rounded-lg'></p>
            <div className=" flex items-center justify-center">
                 <Timeline />
             </div>
        </div>
);
}

export default Procedure;
