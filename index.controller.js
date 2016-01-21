'use strict';

exports.getHeaderInfo = function(req, res) {
	let headers = req.headers;
	let ip = req.ip.match(/\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/)[0];
	let language = headers['accept-language'].split(',')[0];
	res.send({'ip': ip, 'language': language, 'agent': req.useragent.os});
};

exports.index = function(req, res) {
	res.render('index');
};