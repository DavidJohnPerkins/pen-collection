const path = require('path');

const express = require('express');

const displayController = require('../controllers/display');

const router = express.Router();

router.get('/', displayController.getOSMapIndex);

router.get('/maps/:range', displayController.getOSMapIndex);
router.get('/maps/:range/:itemId', displayController.getOSMapItem);

//router.get('/landranger', displayController.getLandrangerIndex);
//router.get('/landrangerItem/:itemId', displayController.getLandrangerItem);

router.get('/pen', displayController.getPenIndex);
router.get('/penItem/:itemId', displayController.getPenItem);

router.get('/ink', displayController.getInkIndex);
router.get('/inkItem/:itemId', displayController.getInkItem);

router.get('/score', displayController.getScoreIndex);
router.get('/scoreItem/:itemId', displayController.getScoreItem);

/*
router.get('/cart', displayController.getCart);

router.post('/cart', displayController.postCart);

router.post('/cart-delete-item', displayController.postCartDeleteProduct);

router.get('/orders', displayController.getOrders);

router.get('/checkout', displayController.getCheckout);
*/
module.exports = router;
