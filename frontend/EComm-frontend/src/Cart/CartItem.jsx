import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="quantity-btn"
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>
        
        <div className="item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        
        <button onClick={handleRemove} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;