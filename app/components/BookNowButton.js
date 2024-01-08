// BookNowButton.js

import React from 'react';
import { motion } from 'framer-motion';

const BookNowButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300"
    >
      Book Now
    </motion.button>
  );
};

export default BookNowButton;
