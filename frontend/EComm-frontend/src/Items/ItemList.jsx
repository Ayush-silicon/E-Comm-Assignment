import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import Filters from './Filters';
import { mockItems } from '../../services/api';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setItems(mockItems);
        setFilteredItems(mockItems);
      } catch (err) {
        setError('Failed to load items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = items;

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(item => 
        item.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(item => item.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(item => item.price <= filters.maxPrice);
    }

    if (filters.search) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="item-list-container">
      <Filters onFilterChange={handleFilterChange} />
      
      <div className="items-grid">
        {filteredItems.length === 0 ? (
          <div className="no-items">No products found matching your criteria.</div>
        ) : (
          filteredItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;