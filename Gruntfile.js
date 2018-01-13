module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({

      concat : {
			dist: {
				src: [
					'js/modules/*.js',
					'js/main.js'
				],
				dest: 'prod/production.js'
			}
		},

		uglify : {
			build : {
				src : 'prod/production.js',
				dest : 'prod/production.min.js'
			}
		},

		watch : {
			scripts : {
				files : ['js/main.js', 'js/modules/*.js'],
				tasks : ['concat', 'uglify'],
				options : {
					spawn : false
				}
       }
			},

      sass: {
          files: ['sass/main.scss', 'sass/modules/*.scss'],
          tasks: ['sass']
        },

        sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'css/main.css':'sass/main.scss'
          }
         }
        },

      //autoprefixer
      autoprefixer: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },

      js: {
        files: [{
          cwd: 'js/src/',
          expand: true,
          src: '*.js',
          dest: 'js/min/'
        }]
      },

      cssmin {
        my_target : {
          files : [{
            expand : true,
            cwd : 'css/',
            src : ['*.css', '!*.min.css'],
            dest : 'css/',
            ext : '.min.css'
          ]}
        }
      }

 });

 // loadNpmTasks
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

 // Run Default task(s).
 grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('watchFiles', ['watch', 'sass']);

};
