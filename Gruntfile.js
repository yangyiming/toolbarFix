module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      'jsmin-sourcemap': {
          all: {
              src: ['toolbarFix.js'],
              dest: 'toolbarFix.min.js',
              destMap: 'toolbarFix.js.map'
          }
      }

  });
    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
  grunt.registerTask('default', ['jsmin-sourcemap']);
};