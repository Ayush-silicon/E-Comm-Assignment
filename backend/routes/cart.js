const express = require('express');
const { getCart, addToCart, updateCartItem, removeFromCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, getCart);
router.post('/add', auth, addToCart);
router.put('/update/:itemId', auth, updateCartItem);
router.delete('/remove/:itemId', auth, removeFromCart);

module.exports = router;