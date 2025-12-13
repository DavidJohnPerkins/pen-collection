const path = require('path');

const express = require('express');

const displayController = require('../controllers/display');

const router = express.Router();

router.get('/', displayController.getExplorerIndex);

router.get('/explorer', displayController.getExplorerIndex);
router.get('/explorerItem/:itemId', displayController.getExplorerItem);

router.get('/landranger', displayController.getLandrangerIndex);
router.get('/landrangerItem/:itemId', displayController.getLandrangerItem);

router.get('/pen', displayController.getPenIndex);
router.get('/penItem/:itemId', displayController.getPenItem);

/*
router.get('/cart', displayController.getCart);

router.post('/cart', displayController.postCart);

router.post('/cart-delete-item', displayController.postCartDeleteProduct);

router.get('/orders', displayController.getOrders);

router.get('/checkout', displayController.getCheckout);
*/
module.exports = router;
