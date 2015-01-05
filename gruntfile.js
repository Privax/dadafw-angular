// jshint node:true

module.exports = function(grunt) {
	// DadaFW Angular build-tool

	var Helpers = require('./grunt/helpers'),
	    _ = grunt.util._,
	    path = require('path');

	Helpers.pkg = require('./package.json');

	if(Helpers.isPackageAvailable('time-grunt')) {
		require('time-grunt')(grunt);
	}

	if(Helpers.isPackageAvailable('load-grunt-tasks')) {
		require('load-grunt-tasks')(grunt);
	}

	if(Helpers.isPackageAvailable('jit-grunt')) {
		require('jit-grunt')(grunt, {});
	}

	var config = {};

	config.env = process.env;
	config.package = Helpers.pkg;

	_.extend(config, require('load-grunt-config')(grunt, {
		configPath     : path.join(__dirname, 'grunt', 'tasks', 'config'),
		loadGruntTasks : false,
		init           : false
	}));

	grunt.loadTasks('grunt/tasks');
	grunt.loadTasks('grunt/tasks/build');
	grunt.initConfig(config);

	grunt.registerTask('default', ['build']);
};