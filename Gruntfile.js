module.exports = function(grunt){
	grunt.initConfig({		
		uglify: {
			build: {
				src: ['js/src/leeui.js'],
				dest: 'js/leeui.min.js'
			}
	    },
	    watch: {
	    	client: {
	    		files: ['*', 'views/*', 'js/src/*', 'css/src/*'],
	    		options: {
	    			livereload: true
	    		}
	    	},
	    	less: {
	    		files: ['css/src/*.less', 'js/src/*'],
	    		tasks: ['less:dev', 'uglify:build']
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