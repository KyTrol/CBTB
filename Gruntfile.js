module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
            	separator: ';',
            },
            dist: {
            	src: ['js/jquery-1.11.3.js', 'js/script.js'],
            	dest: 'js/production.js',
            },
        },

        uglify: {
        	build: {
        		src: 'js/production.js',
        		dest: 'js/production.min.js',
        	},
        },

        responsive_images: {
        	dev: {
        		options: {
        			engine: 'im'
        		},
        		files: [{
        			expand: true,
        			src: ['*.jpg'],
        			cwd: 'img/orig',
        			dest: 'img/opt'
        		}]
        	}
        },

        imagemin: {
        	dynamic: {
        		files: [{
        			expand: true,
        			cwd: 'img/opt',
        			src: ['**/*.{png,jpg,gif}'],
        			dest: 'img/min'
        		}]
        	}
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);


};