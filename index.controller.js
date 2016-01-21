'use strict';

exports.getHeaderInfo = function(req, res) {
	let headers = req.headers;
	res.send({'ip': req.ip, 'language': headers['accept-language'], 'agent': headers['user-agent']});
};

exports.index = function(req, res) {
	res.render('index');
};