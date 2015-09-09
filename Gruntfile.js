module.exports = function(grunt) {
    // 项目配置(任务配置)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            client: {
                files: [ 'app/*.html', 'static/styles/*', 'static/scripts/*', 'static/images/**/*'],
                options: {
                    livereload: true
                }
            }
        },
        // 合并js
        concat: {
         options: {
             separator: ';',
             stripBanners: true
         },
         dist: {
             src: [
                 "scripts/zepto.min.js",
                 "scripts/event.min.js",
                 "scripts/sweetalert.min.js",
                 "scripts/TouchSlide.1.1.js"
             ],
             dest: "dist/scripts/default.js"
         }
        },
        // js压缩
        uglify: {
         options: {
         },
         dist: {
             files: {
                 'dist/static/scripts/config.js': 'static/scripts/config.js',
                 'dist/static/scripts/input.js': 'static/scripts/input.js',
                 'dist/static/scripts/main.js': 'static/scripts/main.js',
                 'dist/static/scripts/user.js': 'static/scripts/user.js',
             }
         }
     	},

        // 合并css
        cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 'dist/styles/main.min.css': [
                     "styles/main.css",
                     "styles/styles.css",
                     "styles/sweetalert.css"
                 ]
             }
         }
     	},

     	// 图片压缩
     	imagemin: {
           prod: {
            options: {
              optimizationLevel: 7,
              pngquant: true
            },
            files: [{
            	expand: true,
            	cwd: 'images',
            	src: ['static/images/*.{png,jpg,jpeg,gif,webp,svg}'],
            	dest: 'dist/static/images'
            }]
          }
        },

        // htmlmin
        htmlmin: {
          options: {
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true
          },
          html: {
            files: [{
            	expand: true,
            	cwd: 'html',
            	src: ['app/*.html'],
            	dest: 'dist/app'
            }]
          }
        }


    });
 
    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-contrib-imagemin');
  	grunt.loadNpmTasks('grunt-contrib-htmlmin');
 
    // 自定义任务 'cssmin',·
    grunt.registerTask('live', ['watch']);
    grunt.registerTask('default', ['htmlmin', 'uglify', 'cssmin', 'imagemin']);
 
};