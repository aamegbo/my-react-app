// JavaScript source code
// src/components/Cart.js
import React from 'react';


//cartItems used to add movie items to the cart
//onRemoveFromCart used to removed any items from the cart

const Cart = ({ cartItems, onRemoveFromCart }) => {
    return (
        
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;