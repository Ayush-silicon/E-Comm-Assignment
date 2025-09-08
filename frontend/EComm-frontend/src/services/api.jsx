const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const loginUser = (credentials) => {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

export const signupUser = (userData) => {
  return apiRequest('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const getCurrentUser = () => {
  return apiRequest('/auth/me');
};

export const getItems = (filters = {}) => {
  const queryString = new URLSearchParams(filters).toString();
  return apiRequest(`/items${queryString ? `?${queryString}` : ''}`);
};

export const getItemById = (id) => {
  return apiRequest(`/items/${id}`);
};

// Mock data for development
export const mockItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sports",
    description: "Comfortable running shoes for everyday use"
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1520031473529-2c06dea61853?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Home",
    description: "Ceramic coffee mug with ergonomic design"
  },
  {
    id: 4,
    name: "Smartphone",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1721864428866-811f04fbd1cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    description: "Latest smartphone with advanced camera features"
  },
  {
    id: 5,
    name: "Backpack",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    description: "Durable backpack perfect for travel and daily use"
  }
];