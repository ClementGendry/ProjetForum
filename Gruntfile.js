module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('compile-css', ['sass:app', 'autoprefixer:app']);
    grunt.registerTask('compile-js', ['browserify:app', 'uglify:app']);
    grunt.registerTask('compile-html', ['htmlmin:index', 'htmlmin:partial', 'htmlmin:directive']);

    grunt.registerTask('init', ['compile-js', 'compile-css', 'compile-html']);

    grunt.registerTask('default', ['watch']);

    grunt.initConfig({

        /**
         * Watch
         */
        watch: {
            index: {
                files: ['src/*.html'],
                tasks: ['htmlmin:index'],
                options: {
                    livereload: 35729
                }
            },
            partial: {
                files: ['src/partial/*.html'],
                tasks: ['htmlmin:partial'],
                options: {
                    interrupt: true,
                    livereload: 35729
                }
            },
            directive: {
                files: ['src/directive/*.html'],
                tasks: ['htmlmin:directive'],
                options: {
                    livereload: 35729
                }
            },
            css: {
                files: ['src/assets/sass/*.scss','src/assets/sass/**/*.scss','src/assets/sass/**/**/*.scss'],
                tasks: ['compile-css'],
                options: {
                    interrupt: true,
                    livereload: 35729
                }
            },
            javascript: {
                files: ['src/assets/js/*.js','src/assets/js/**/*.js','src/assets/js/**/**/*.js'],
                tasks: ['compile-js'],
                options: {
                    interrupt: true,
                    livereload: 35729
                }
            }
        },

        /**
         * HTML
         */
        htmlmin: {
            index: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'web/index.html': 'src/index.html'
                }
            },
            partial: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    //'web/partial/file.html': 'src/partial/file.html'
                    'web/partial/home.html': 'src/partial/home.html',
                    'web/partial/todo.html': 'src/partial/todo.html',
                    'web/partial/category.html': 'src/partial/category.html',
                    'web/partial/article-details.html': 'src/partial/article-details.html'
                }
            },
            directive: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    //'web/directive/file.html': 'src/directive/file.html'
                    'web/directive/tab.html': 'src/directive/tab.html',
                    'web/directive/tabset.html': 'src/directive/tabset.html'
                }
            }
        },

        /**
         * CSS
         */
        sass: {
            app: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'src/assets/css/style.min.css': 'src/assets/sass/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                // Task-specific options go here.
            },
            app: {
                src: 'src/assets/css/style.min.css',
                dest: 'web/assets/css/style.min.css'
            }
        },

        /**
         * Javascript
         */
        browserify: {
            app: {
                files: {
                    'web/assets/js/app.js': ['src/assets/js/app.js']
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'web/assets/js/app.min.js': ['web/assets/js/app.js']
                }
            }
        }
    });
};
