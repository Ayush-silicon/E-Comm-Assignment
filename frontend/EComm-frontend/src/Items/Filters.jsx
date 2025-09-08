import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    search: ''
  });

  const categories = ['all', 'Electronics', 'Sports', 'Home', 'Fashion'];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    handleFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      category: 'all',
      minPrice: '',
      maxPrice: '',
      search: ''
    };
    handleFilterChange(resetFilters);
  };

  return (
    <div className="filters-container">
      <h3>Filters</h3>
      
      <div className="filter-group">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          name="search"
          value={filters.search}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="filter-select"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleInputChange}
          min="0"
          step="0.01"
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
          min="0"
          step="0.01"
          className="filter-input"
        />
      </div>

      <button onClick={resetFilters} className="reset-filters-btn">
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;