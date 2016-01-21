'use strict';

module.exports = function(app) {
	let indexCtrl = require('./index.controller');
	app.get('/', indexCtrl.index);
	app.get('/api/whoami', indexCtrl.getHeaderInfo);
};