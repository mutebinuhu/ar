import Image from 'next/image';
import React from 'react';

const HospitalSummary = () => {
    return (
        <div>
            <div>Image Place holder</div>
            <div>
                <span>-</span>
                <span>Around</span>
            </div>
            <div>
                <h2>Hospital Summary</h2>
                <ul>
                    <li> The simplest way to install is through sublime text</li>
                    <li> The simplest way to install is through sublime text</li>
                    <li> The simplest way to install is through sublime text</li>
                    <li> The simplest way to install is through sublime text</li>
                </ul>
                <blockquote>
                    <p>
                    “Once opened, paste the appropriate code for your version of the console.”
                    </p>
                    -<span>Micheal Smith</span>
                    <Image alt="picture"/>
                </blockquote>
            </div>

        </div>
    );
}

export default HospitalSummary;
