module.exports = function(grunt) {
	
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	connect:{
	  	devserver:{
	  		options:{
	  			port: 8800,
	  			hostname : '0.0.0.0',
	  			base : '.',
	  			middleware: function(connect, options){
            return [
              connect.static(options.base),
              connect.directory(options.base)
            ];
          },
	  			keepalive: true
	  		}
	  	}
  	},
    jshint: {
      options: {
        multistr: true,
        smarttabs: true,
        ignores: ['src/directives/table/table.js']
      },
      files: ['src/part1/**/*.html','src/part2/**/*.html']
    }
  });

  grunt.registerTask('webserver',['connect:devserver'])
  grunt.registerTask('build',['jshint','recess','copy','uglify'])
  grunt.registerTask('default',['build','webserver', 'watch'])
};