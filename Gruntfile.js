module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less"
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less', 'uglify']);
};