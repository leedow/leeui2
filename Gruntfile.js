module.exports = function(grunt){
	grunt.initConfig({
		/*
		uglify: {
			build: {
				src: ['usr/themes/vman/js/src/main.js'],
				dest: 'usr/themes/vman/js/main.min.js'
			}
	    },*/
	    watch: {
	    	client: {
	    		files: ['*'],
	    		options: {
	    			livereload: true
	    		}
	    	},
	    	less: {
	    		files: ['css/src/*.less'],
	    		tasks: ['less:dev'/*, 'uglify:build'*/]
	    	}
	    },
	    less: {
	    	dev: {
	    		options: {
	    			compress: true
	    		},
	    		files: {
	    			'css/leeui.min.css' : 'css/src/leeui.less'
	    		}
	    	}
	    }
    }) 
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['uglify', 'less']);
	grunt.registerTask('live', ['watch']);
}