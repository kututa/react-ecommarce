import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
       const existingProduct = cart.find((item) => item.id === product.id);
         if (existingProduct) {
              const newCart = cart.map((item) => {
                if (item.id === product.id) {
                     return {
                          ...item,
                          quantity: item.quantity + 1
                     };
                }
                return item;
              });
              setCart(newCart);
         } else {
              setCart([...cart, {...product, quantity: 1}]);
         }
    }

    const handleRemoveFromCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct.quantity === 1) {
            const newCart = cart.filter((item) => item.id !== product.id);
            setCart(newCart);
        } else {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            });
            setCart(newCart);

    }}
    CartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

   
    return (
        <CartContext.Provider value={{cart, handleAddToCart, handleRemoveFromCart}}>
            {children}
        </CartContext.Provider>
    );
}
