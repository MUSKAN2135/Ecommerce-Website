import React from 'react';
import bg from '/background.png';
import leaf3 from '/leaf3.png';

export default function Section() {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 m-5 rounded-lg" style={{backgroundImage: `url(${bg})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "60vh",}} >
                <div className="relative max-w-md text-white mb-6 md:mb-0 md:text-left ml-38 text-center">
                    <p className="text-yellow-400 text-lg font-semibold mb-2">
                        Get 30% OFF
                    </p>
                    <h1 className="text-3xl md:text-4xl italic font-bold mb-3">
                        Trendy Mart
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius animi magnam facilis!
                    </p>
                </div>
                <div className="flex justify-center md:justify-end w-auto">
                    <img src={leaf3} className="w-32 md:w-48 lg:w-56 mr-12 object-contain" alt="leaf"/>
                </div>
            </div>
        </div>
    );
}
