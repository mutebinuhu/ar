import React from 'react';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className='h-18'>
                <div className='m-4'>
                <div className='flex justify-between justify-center items-center'>
                <div>
                    <Image src="/images/logo.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        className='w-48 h-18'
                        quality={100}/>
                </div>
                <div className='p-2 bg-blue-500 rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-6 h-6'  viewBox="0 0 50 50">
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                </svg>
                </div>
                </div>
                </div>
                <ul>

                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            
        </nav>
    );
};

export default NavBar;