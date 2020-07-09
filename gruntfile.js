"use strict";

module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");

    grunt.initConfig({
        less: {
            style: {
                files: {
                    "css/style.css": "less/style.less",
                    "css/media-queries.css": "less/less-media/style-media.less"
                }
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')()
                ]
            },
            dist: {
                src: 'css/style.css'
            }
        },


        browserSync: {
            server: {
                bsFiles: {
                    src: [
                        "*.html",
                        "css/*css"
                    ]
                },
                options: {
                    server: ".",
                    watchTask: true,
                    notify: false,
                    open: true,
                    cors: true,
                    ui: false
                }
            }
        },

        watch: {
            style: {
                files: ["less/*.less"],
                tasks: ["less", "postcss"]
            },
            styleMedia: {
                files: ["less/less-media/*.less"],
                tasks: ["less", "postcss"]
            }
        }
    });

    grunt.registerTask("serve", ["browserSync", "watch"]);
};
