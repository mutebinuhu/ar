import React from 'react';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav>
                <div>
                    <Image src="/images/logo.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        quality={100}/>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                </svg>
                <ul>

                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            
        </nav>
    );
};

export default NavBar;