import React from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const ItemCard = ({ item }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      alert('Please login to add items to cart');
      return;
    }
    addToCart(item);
  };

  return (
    <div className="item-card">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-category">{item.category}</div>
        <div className="item-price">${item.price.toFixed(2)}</div>
        
        <button 
          onClick={handleAddToCart}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

