import React from 'react';
import { FaShoppingCart, FaDesktop, FaMobile, FaLaptop } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="bg-[#68D2E8] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Tech Haven: Your Ultimate Electronics Destination
            </h1>
            <p className="text-gray-800 text-lg">
              Discover cutting-edge technology, unbeatable deals, and the latest gadgets that transform your digital life.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center">
                <FaShoppingCart className="mr-2" /> Shop Now
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
              <FaDesktop className="mx-auto text-4xl text-blue-600 mb-4" />
              <h3 className="font-semibold">Desktops</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
              <FaLaptop className="mx-auto text-4xl text-green-600 mb-4" />
              <h3 className="font-semibold">Laptops</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
              <FaMobile className="mx-auto text-4xl text-purple-600 mb-4" />
              <h3 className="font-semibold">Smartphones</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
              <h3 className="font-semibold">Accessories</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;