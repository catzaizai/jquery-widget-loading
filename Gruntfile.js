/**
 * Created by 猫崽崽 on 1/3/2016.
 */

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON(package.json),

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
        }
    })
}