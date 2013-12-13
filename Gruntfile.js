module.exports = function(grunt){
	grunt.initConfig({
        
        clean:{
        	dist: ['dist'] //delte dist directory
        },

		copy:{ //copy all files from src to dist
			main:{
				expand:true,
				cwd:'src/',
				src:'**',
				dest:'dist/',
				filter:'isFile',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
}
