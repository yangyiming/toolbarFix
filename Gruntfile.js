module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
            src: 'src/toolbarFix.js',
            dest: 'dist/toolbarFix.min.js'
        }
    },
      concat: {
          options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          dist: {
              src: 'src/toolbarFix.js',
              dest: 'dist/toolbarFix.js'
          }
      },
      'jsmin-sourcemap': {
          all: {
              src: ['dist/toolbarFix.js'],
              dest: 'dist/toolbarFix.min.js',
              destMap: 'dist/toolbarFix.js.map'
          }
      }

  });
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
  grunt.registerTask('default', [ 'uglify:dist','concat:dist','jsmin-sourcemap']);
};