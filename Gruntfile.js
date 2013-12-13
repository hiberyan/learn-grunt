module.exports = function(grunt){
	grunt.initConfig({
        
        clean:{
        	dist: ['dist'] //delte dist directory
        },

        less:{
        	src:{
        		files:{
        			'src/styles/main.css':'src/styles/main.less'  // compile .less to .css
        		}
        	},
        	dist:{
        		files:{
        			'src/styles/style.css':'src/styles/style.less'  // make sure always compile the files in the dist
        		}
        	}
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
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('build',[
		'clean',
		'less:dist',
		'copy'
		]);

	grunt.registerTask('default',['build']);
}
