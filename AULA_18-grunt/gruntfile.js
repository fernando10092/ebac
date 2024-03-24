module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Compressão Less
        less: {
            development: {
                files: {
                    'dist/style/main.css': 'src/style/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/style/main.css': 'src/style/main.less'
                }

            }
        },

        //Compressão js
        uglify: {
            target: {
                files: {
                    'dist/script/main.min.js': 'src/script/main.js'
                }
            }
        }

    });

    //msg Ola
    grunt.registerTask('olaGrunt', function () {
        const done = this.async();
        setTimeout(function () {
            console.log('Ola Grunt - Fernando');
            done();
        }, 3000)
    })

    //Executando Compilação less css
    grunt.loadNpmTasks('grunt-contrib-less');

    //Executando Compilação de compressão javascripit
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Inserir compliações aqui
    grunt.registerTask('default', ['olaGrunt', 'less', 'uglify']);

};


//npm run grunt
//npm run grunt build