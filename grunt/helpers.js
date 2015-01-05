var grunt   = require('grunt'),
    _       = grunt.util._,
    Helpers = {};

Helpers.isPackageAvailable = function(pakageNames) {
	var toArray = function(obj) {
		if(!_.isArray(obj)) {
			obj = [obj];
		}

		return obj;
	}

	if(!packageNames) {
		return true;
	}

	packageNames = toArray(packageNames);

	return _.every(packageNames, function(packageNames) {
		packageNames = toArray(packageNames);

		return _.any(packageNames, function(packageName) {
			return !!Helpers.pkg.devDependencies[packageName];
		});
	});
};

module.exports = Helpers;