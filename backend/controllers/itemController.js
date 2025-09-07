const Item = require('../models/Item');

const getItems = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, search } = req.query;
    
    let filter = {};
    
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    const items = await Item.find(filter);
    res.json(items);
  } catch (error) {
    console.error('Get items error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Get item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;
    
    const item = new Item({
      name,
      description,
      price,
      category,
      image
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error('Create item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getItems, getItemById, createItem };