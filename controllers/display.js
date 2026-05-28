//const collection = require('../models/collection_dead');
const dbfunc = require('../util/db_function');
const { server, db } = require("../config");

exports.getOSMapItem = (req, res, next) => {
	const range = req.params.range;
	const itemId = req.params.itemId;
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/maps/${range}/${itemId}`)
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
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/maps/${range}`)
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

exports.getPenIndex = (req, res, next) => {
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/pens`)
		.then((rows) => {
			res.render('main-page/pen-list', {
				items: rows,
				pageTitle: 'Pen Collection',
				path: '/'
			});
		})
		.catch(err => console.log(err));
};

exports.getInkIndex = (req, res, next) => {
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/inks`)
		.then((rows) => {
			res.render('main-page/ink-list', {
				items: rows,
				pageTitle: 'Ink Collection',
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};

exports.getScoreIndex = (req, res, next) => {
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/scores`)
		.then((rows) => {
			res.render('main-page/score-list', {
				items: rows,
				pageTitle: 'Score Collection',
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};

exports.getPolychromosIndex = (req, res, next) => {
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/polychrom`)
		.then((rows) => {
			res.render('main-page/polychromos-list', {
				items: rows,
				pageTitle: 'Polychromos Pencils',
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};

exports.getPenItem = (req, res, next) => {
	const itemId = req.params.itemId;
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/pens/${itemId}`)
		.then((item) => {
			res.render('main-page/pen-detail', {
				item: item,
				pageTitle: `${item.BRAND} - ${item.MODEL_NAME}`,
				path: '/'
			});
		})
    	.catch(err => console.log(err));
};

exports.getInkItem = (req, res, next) => {
	const itemId = req.params.itemId;
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/inks/${itemId}`)
	 	.then((item) => {
	 		res.render('main-page/ink-detail', {
	 			item: item,
	 			pageTitle: `${item.BRAND} - ${item.INK_NAME}`,
	 			path: '/'
	 		});
		})
	 	.catch(err => console.log(err));
};

exports.getScoreItem = (req, res, next) => {
	const itemId = req.params.itemId;
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/scores/${itemId}`)
	 	.then((item) => {
	 		res.render('main-page/score-detail', {
	 			item: item,
	 			pageTitle: `${item.key_value}`,
	 			path: '/'
	 		});
		})
	 	.catch(err => console.log(err));
};

exports.getPolychromosItem = (req, res, next) => {
	const itemId = req.params.itemId;
	dbfunc.getData(`http://${db.url}:${server.port}/api/collection/polychrom/${itemId}`)
	 	.then((item) => {
	 		res.render('main-page/polychrom-detail', {
	 			item: item,
	 			pageTitle: `${item.COLOUR_NAME}`,
	 			path: '/'
	 		});
		})
	 	.catch(err => console.log(err));
};
