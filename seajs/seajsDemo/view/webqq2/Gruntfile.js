module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat : {
		webqq : {
			files : {
				'dist/main.js' : ['main.js','scale.js','range.js','drag.js']	
			}		
		}	
	},
	uglify : {
		webqq : {
			files : {
				'dist/main.min.js' : ['dist/main.js']	
			}		
		}	
	}
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','uglify']);
};