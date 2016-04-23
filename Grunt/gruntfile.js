module.exports =function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                files: ['../less/styles.less'], 
                tasks: ['less:development'], 
                options: { 
                    spawn: false, 
                    //livereload: true 
                }
            } 
        },

        uncss: {
            dist: {
                files: {
                    'css/style.css' : ['index.html']
                }
            }
        },

        uglify: {
            options: {
                manage: false,
            },
            my_target: {
                files: {
                    'js/main.min.js' : 'js/main.js'
                }
            }
        },

        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
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
    grunt.registerTask('default', ["cssmin","uncss"]);
    grunt.registerTask('minjs', ["uglify"]);
    grunt.registerTask('comp', ["watch"]);
    grunt.registerTask('c', ["less"]);
}
