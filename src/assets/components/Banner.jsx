import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaDesktop } from 'react-icons/fa';

const Banner = () => {
    const [countdown, setCountdown] = useState(5 * 24 * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSeconds) => {
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(countdown);

    return (
        <div className="bg-gradient-to-br from-indigo-800 to-purple-600 
        text-white p-8 rounded-3xl flex items-center justify-between 
        shadow-2xl transform transition-all hover:scale-[1.01]">
            
            <div className="space-y-6 w-1/2">
                <div className="flex items-center space-x-4">
                    <FaDesktop className="text-4xl text-yellow-300" />
                    <h1 className="text-4xl font-bold tracking-wide">
                        Tech Mega Sale
                    </h1>
                </div>
                
                <div className="text-xl font-semibold">
                    Hurry! Mega Discounts Ending In:
                </div>
                
                <div className="flex space-x-4">
                    {[
                        { label: 'Days', value: days },
                        { label: 'Hours', value: hours },
                        { label: 'Mins', value: minutes },
                        { label: 'Secs', value: seconds }
                    ].map(({ label, value }) => (
                        <div key={label} className="bg-white/20 p-3 rounded-xl text-center">
                            <div className="text-3xl font-bold">{value}</div>
                            <div className="text-xs">{label}</div>
                        </div>
                    ))}
                </div>
                
                <button className="bg-green-400 text-black 
                px-6 py-3 rounded-full flex items-center space-x-2 
                hover:bg-yellow-500 transition-colors">
                    <FaShoppingCart />
                    <span>Shop Now</span>
                </button>
            </div>
            
            <div className="w-1/2 flex justify-end">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-96 h-96 
                transform hover:rotate-6 transition-transform"></div>
            </div>
        </div>
    );
};

export default Banner;