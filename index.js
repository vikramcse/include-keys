'use strict';

module.exports = function(obj, whitelist) {
	var keys = Object.keys(obj);
	var result = {};

	// if whitelist is string
	if (typeof whitelist === 'string') {
		whitelist = new Array(whitelist);
	}

	keys.forEach(function(k) {
		if (whitelist.indexOf(k) !== -1) {
			result[k] = obj[k];
		}
	});

	return result;
};