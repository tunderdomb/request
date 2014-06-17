module.exports = function ( grunt ){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  })


  grunt.config("uglify", {
    dist: {
      options: {
        mangle: {
          except: ["request"]
        },
        compress: true,
        preserveComments: "some",
        report: true
      },
      files: {
        "dist/request.min.js": [
          "src/EventStation/EventStation.js",
          "src/request.js"
        ]
      }
    }
  })

  grunt.config("concat", {
    dist: {
      options: {
        separator: ";\n",
        banner: grunt.file.read("src/banner.js"),
        stripBanners: {
          block: true,
          line: true
        }
      },
      files: {
        "dist/request.js": [
          "src/EventStation/EventStation.js",
          "src/request.js"
        ]
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.loadNpmTasks("grunt-contrib-concat")

  grunt.registerTask("default", function(  ){
    grunt.task.run("concat")
    grunt.task.run("uglify")
  })
}