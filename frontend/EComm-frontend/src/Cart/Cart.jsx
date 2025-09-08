import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <strong>Total: ${getCartTotal().toFixed(2)}</strong>
        </div>
        
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;