const express = require('express');
const { getItems, getItemById, createItem } = require('../controllers/itemController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', auth, createItem);

module.exports = router;