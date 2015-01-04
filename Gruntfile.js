module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        fixed: {
            src: 'toolbarFix.js',
            dest: 'toolbarFix.min.js'
        }
    }

  });
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', [ 'uglify:fixed']);
};