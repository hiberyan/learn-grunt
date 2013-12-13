module.exports = function(grunt){
	grunt.initConfig({
		copy:{
			main:{
				expand:true,
				cwd:'src/',
				src:'**',
				dest:'dist/'
				filter:'isFile',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
}
