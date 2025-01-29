
import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context';

const ProductListing = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      id: 1, 
      name: 'Smartphone', 
      image: 'src/assets/components/images/phone-samsung.jpg',
      price: 65000,
      description: 'Latest model smartphone with advanced features',
      specs: ['6.5" Display', '128GB Storage', '5G Enabled']
    },
    { 
      id: 2, 
      name: 'Laptop', 
      image: 'src/assets/components/images/computer.png',
      price: 145000,
      description: 'High-performance laptop for professionals',
      specs: ['Core i7', '16GB RAM', '512GB SSD']
    },
    { 
      id: 3, 
      name: 'Headphones', 
      image: 'src/assets/components/images/resized_image.jpg',
      price: 22000,
      description: 'Noise-cancelling wireless headphones',
      specs: ['Bluetooth 5.0', '20hr Battery', 'Noise Cancellation']
    },
    { 
      id: 4, 
      name: 'Smartwatch', 
      image: 'src/assets/components/images/1.jpg',
      price: 28000,
      description: 'Smart fitness tracker with health monitoring',
      specs: ['Heart Rate Monitor', 'GPS', 'Water Resistant']
    }
  ];

  const [quantity, setQuantity] = useState(1);
  const {handleAddToCart} = useContext(CartContext)

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  if (selectedProduct) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-64 object-cover rounded-t-lg mb-4" 
          />
          <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
          <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
          
          <div className="mt-4">
            <h3 className="font-semibold">Specifications:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {selectedProduct.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center mt-4">
            <span className="text-xl font-semibold mr-4">Ksh {selectedProduct.price.toLocaleString()}</span>
            <div className="flex items-center">
              <button 
                onClick={() => handleQuantityChange('decrease')}
                className="bg-gray-200 px-3 py-1 rounded-l"
              >
                -
              </button>
              <span className="px-4 py-1 border">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                className="bg-gray-200 px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button 
              onClick={handleAddToCart} 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleCloseDetails} 
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Featured Electronics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Ksh {product.price.toLocaleString()}</p>
              <button 
                onClick={() => handleViewDetails(product)}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

