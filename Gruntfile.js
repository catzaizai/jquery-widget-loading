/**
 * Created by 猫崽崽 on 1/3/2016.
 */

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options:{
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'build/<%=pkg.name%>-<%=pkg.version%>.min.js':[
                        "src/js/loading.js"
                    ]
                }
            }
        },

        cssmin: {

        },

        copy: {

        },

        jshint:{
            build: ['Gruntfile.js', 'src/js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        watch: {

        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'uglify']);
};