const Cart = require('../models/Cart');
const Item = require('../models/Item');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.item');
    if (!cart) {
      return res.json({ items: [], totalAmount: 0 });
    }
    res.json(cart);
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addToCart = async (req, res) => {
  try {
    const { itemId, quantity = 1 } = req.body;

    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(
      cartItem => cartItem.item.toString() === itemId
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ item: itemId, quantity });
    }

    // Calculate total amount
    await cart.populate('items.item');
    cart.totalAmount = cart.items.reduce((total, cartItem) => {
      return total + (cartItem.item.price * cartItem.quantity);
    }, 0);

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const cartItemIndex = cart.items.findIndex(
      cartItem => cartItem.item.toString() === itemId
    );

    if (cartItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    if (quantity <= 0) {
      cart.items.splice(cartItemIndex, 1);
    } else {
      cart.items[cartItemIndex].quantity = quantity;
    }

    // Calculate total amount
    await cart.populate('items.item');
    cart.totalAmount = cart.items.reduce((total, cartItem) => {
      return total + (cartItem.item.price * cartItem.quantity);
    }, 0);

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      cartItem => cartItem.item.toString() !== itemId
    );

    // Calculate total amount
    await cart.populate('items.item');
    cart.totalAmount = cart.items.reduce((total, cartItem) => {
      return total + (cartItem.item.price * cartItem.quantity);
    }, 0);

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart };