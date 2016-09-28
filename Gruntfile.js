'use strict';

const loadGrunt = require('load-grunt-tasks');

module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: './lib/index.js'
      },
      target: [
        'Gruntfile.js',
        'lib/**/*.js'
      ]
    },
    release: {
      options: {
        tagName: 'v<%= version %>'
      }
    }
  });

  loadGrunt(grunt);

  grunt.registerTask('default', ['eslint']);
};
