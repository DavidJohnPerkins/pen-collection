const collection = require('../models/collection');
const dbfunc = require('../util/db_function');

exports.getOSMapItem = (req, res, next) => {
	const range = req.params.range;
	const itemId = req.params.itemId;
	dbfunc.getData(`http://localhost:8080/api/collection/maps/${range}/${itemId}`)
		.then((item) => {
			res.render('main-page/map-detail', {
				item: item,
				pageTitle: item.map_title,
				path: '/item'
			});
		})
    	.catch(err => console.log(err));
};

exports.getOSMapIndex = (req, res, next) => {
	var range = req.params.range ?? '';
	if (range === '') {
		range = 'EXPLORER';
	}
	dbfunc.getData(`http://localhost:8080/api/collection/maps/${range}`)
		.then((rows) => {
			res.render('main-page/map-list', {
				items: rows,
				pageTitle: `OS ${range} List`,
				mapType: range,
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};

exports.getPenItem = (req, res, next) => {
	const itemId = req.params.itemId;
	collection.findById('COLLECTION.r_PEN_COLLECTION', itemId)
		.then(([item]) => {
			res.render('main-page/pen-detail', {
				item: item,
				pageTitle: `${item.BRAND} - ${item.MODEL_NAME}`,
				path: '/item'
			});
		})
    	.catch(err => console.log(err));
};

exports.getPenIndex = (req, res, next) => {
	collection.fetchAll('COLLECTION.r_PEN_COLLECTION')
		.then((rows) => {
			res.render('main-page/pen-list', {
				items: rows,
				pageTitle: 'Pen Collection',
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};

exports.getInkItem = (req, res, next) => {
	const itemId = req.params.itemId;
	collection.findById('COLLECTION.r_INK_COLLECTION', itemId)
		.then(([item]) => {
			res.render('main-page/ink-detail', {
				item: item,
				pageTitle: `${item.BRAND} - ${item.MODEL_NAME}`,
				path: '/item'
			});
		})
    	.catch(err => console.log(err));
};

exports.getInkIndex = (req, res, next) => {
	collection.fetchAll('COLLECTION.r_INK_COLLECTION')
		.then((rows) => {
			res.render('main-page/ink-list', {
				items: rows,
				pageTitle: 'Ink Collection',
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};
/*
exports.getCart = (req, res, next) => {
	Cart.getCart(cart => {
	Product.fetchAll(products => {
		const cartProducts = [];
		for (product of products) {
		const cartProductData = cart.products.find(
			prod => prod.id === product.id
		);
		if (cartProductData) {
			cartProducts.push({ productData: product, qty: cartProductData.qty });
		}
		}
		res.render('shop/cart', {
		path: '/cart',
		pageTitle: 'Your Cart',
		products: cartProducts
		});
	});
	});
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
*/