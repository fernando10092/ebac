const { file } = require("grunt");

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            file: 'src/styles/main.scss',
            dist: {
                files: { 'dist/styles/main.min.css': 'src/styles/main.scss' }
            }
        },

        uglify:{
           
            dist: {
               files: {'dist/scripts/main.min.js':'src/scripts/main.js'}
            }
        },
            
        


    });



    //sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    //ugligy
    grunt.loadNpmTasks('grunt-contrib-uglify'); 

    // Padrão
    grunt.registerTask('default', ['sass', 'uglify']);

};