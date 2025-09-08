const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('./models/Item');

dotenv.config();

const sampleItems = [
  {
    name: 'MacBook Pro',
    description: 'Powerful laptop for professionals',
    price: 1299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Nike Running Shoes',
    description: 'Comfortable running shoes',
    price: 89.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'JavaScript Book',
    description: 'Learn JavaScript programming',
    price: 29.99,
    category: 'books',
    image: 'https://plus.unsplash.com/premium_photo-1681412205159-a40ee8b7e32e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt',
    price: 39.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Coffee Maker',
    description: 'Automatic coffee maker',
    price: 79.99,
    category: 'home appliances',
    image: 'https://images.unsplash.com/photo-1565452344518-47faca79dc69?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Item.deleteMany({});
    console.log('Cleared existing items');

    await Item.insertMany(sampleItems);
    console.log('Sample items added');

    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seedDatabase();