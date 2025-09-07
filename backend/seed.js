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
    image: 'https://via.placeholder.com/300x200?text=MacBook+Pro'
  },
  {
    name: 'Nike Running Shoes',
    description: 'Comfortable running shoes',
    price: 89.99,
    category: 'sports',
    image: 'https://via.placeholder.com/300x200?text=Nike+Shoes'
  },
  {
    name: 'JavaScript Book',
    description: 'Learn JavaScript programming',
    price: 29.99,
    category: 'books',
    image: 'https://via.placeholder.com/300x200?text=JS+Book'
  },
  {
    name: 'Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt',
    price: 19.99,
    category: 'clothing',
    image: 'https://via.placeholder.com/300x200?text=T-Shirt'
  },
  {
    name: 'Coffee Maker',
    description: 'Automatic coffee maker',
    price: 79.99,
    category: 'home',
    image: 'https://via.placeholder.com/300x200?text=Coffee+Maker'
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