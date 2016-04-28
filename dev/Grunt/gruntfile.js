module.exports =function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		copy: {
			main: {
				files: [
					{expand: true, src: ['../*.html'], dest: '../../deploy/*.html'},
					{expand: true, src: ['../json/*.json'], dest: '../../deploy/*.json'},
					{expand: true, src: ['../css/*.min.css'], dest: '../../deploy/*.min.css'},
					{expand: true, src: ['../js/*.min.js'], dest: '../../deploy/*.min.js'},
					{expand: true, src: ['../img/*.*'], dest: '../../deploy/*.*'},
					{expand: true, src: ['../img/**'], dest: '../../deploy/*.*'},
				],
			},
		},
		
        less: {
            development: {
                option: {
                    path: ["less/"]
                },
                files: {
                    "../css/style.css" : "../less/source.less"
                }
            }
        },

        watch: { 
            less: { 
                files: ['../less/**/*.less'], 
                tasks: ['less'], 
                options: { 
                    spawn: false, 
                    livereload: true 
                }
            } 
        },

        uncss: {
            dist: {
                files: {
                    '../css/style.css' : ['index.html']
                }
            }
        },

        uglify: {
            options: {
                manage: false,
            },
            my_target: {
                files: {
                    '../js/main.min.js' : '../js/main.js'
                }
            }
        },

        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: '../css/',
                    src: ['*.css', '!*.min.css'],
                    dest: '../css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
    grunt.registerTask('default', ["cssmin","uncss"]);
    grunt.registerTask('min', ["uglify", "cssmin"]);
    grunt.registerTask('comp', ["less", "watch"]);
	grunt.registerTask('deploy', ["uglify", "less", "cssmin", "copy"]);
}
