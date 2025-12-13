const collection = require('../models/collection');
/*
exports.getItems = (req, res, next) => {
	Product.fetchAll()
		.then((rows) => {
			res.render('main-page/os-map-list', {
				items: rows,
				pageTitle: 'All OS Explorer Maps',
				path: '/'
			});
		})
		.catch(err => console.log(err));
};
*/
exports.getExplorerItem = (req, res, next) => {
	const itemId = req.params.itemId;
	collection.findById('COLLECTION.r_OS_EXPLORER', itemId)
		.then(([item]) => {
			res.render('main-page/map-detail', {
				item: item,
				pageTitle: item.map_title,
				path: '/item'
			});
		})
    	.catch(err => console.log(err));
};

exports.getExplorerIndex = (req, res, next) => {
	collection.fetchAll('COLLECTION.r_OS_EXPLORER')
		.then((rows) => {
			res.render('main-page/map-list', {
				items: rows,
				pageTitle: 'OS Explorer List',
				mapType: 'explorer',
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};

exports.getLandrangerItem = (req, res, next) => {
	const itemId = req.params.itemId;
	collection.findById('COLLECTION.r_OS_LANDRANGER', itemId)
		.then(([item]) => {
			res.render('main-page/map-detail', {
				item: item,
				pageTitle: item.map_title,
				path: '/item'
			});
		})
    	.catch(err => console.log(err));
};

exports.getLandrangerIndex = (req, res, next) => {
	collection.fetchAll('COLLECTION.r_OS_LANDRANGER')
		.then((rows) => {
			res.render('main-page/map-list', {
				items: rows,
				pageTitle: 'OS Landranger List',
				mapType: 'landranger',
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
				mapType: 'landranger',
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