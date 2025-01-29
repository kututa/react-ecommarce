import React, { useContext } from 'react'

import { CartContext } from '../../Context';

const Cart = () => {

 const {cart, handleRemoveFromCart} = useContext(CartContext);


  return (
    <div className="cart pb-4">
      <h2 className='text-2xl font-bold mb-6"'>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">
                Ksh {product.price.toLocaleString()}
              </p>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                View Details
              </button>
              <button
                onClick={() => handleRemoveFromCart(product)}
                className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                >
                Remove from Cart
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart