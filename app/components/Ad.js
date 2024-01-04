import React from 'react';

const Ad = ({info,em, action}) => {
    return (
        <div className='bg-gray-100 p-4 text-center shadow-2xl rounded '>
            <h3 class="text-xl leading-relaxed"> {info}<strong> {em}</strong></h3>
            <button className='bg-blue-500 m-4 text-white rounded px-4 py-2'>{action}</button>
        </div>
    );
}

export default Ad;
