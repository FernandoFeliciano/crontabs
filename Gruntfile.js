module.exports = function(grunt) {
    var testRunner = "TestRunner.html?test=";	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			all: {
				options: {
					urls: [
						testRunner + 'Tab',
						testRunner + 'Cron',
						testRunner + 'TabCollection',
                        testRunner + 'ChromeTabManager',
                        testRunner + 'EnableButtonView'
					]
				}
			}
		},
		hogan: {
			crontabs: {
				templates: "templates/**/*.hogan",
				output: "src/js/templates.js",
				binderName: "amd"
			}
		},
		watch: {
			scripts: {
				files: "templates/**/*.hogan",
				tasks: ["hogan"],
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-hogan');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
