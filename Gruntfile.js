'use strict'

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: {
      jsAssetVersion: require('./config').assetVersion,
      assetVersion: require('./config').assetVersion
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery', '$']
        },
        compress: process.env.NODE_ENV !== 'development',
        global_defs: {
          DEBUG: false
        },
        dead_code: true
      },
      project: {
        expand: true,
        cwd: 'public/js/',
        src: ['**/*.js', '!**/*.min.js'],
        dest: 'docs/js/',
        ext: '<%= pkg.jsAssetVersion %>.min.js',
        extDot: 'last'
      }
    },
    shell: {
      ssg: {
        command: 'npm run create'
      }
    },
    less: {
      options: {
        compress: true,
        paths: [
          '/',
          './node_modules'
        ],
        plugins: [
          new (require('less-plugin-clean-css'))()
        ],
        modifyVars: {
          imageCloud: '"<%= pkg.imageCloud %>"'
        }
      },
      files: {
        expand: true,
        cwd: 'less/',
        src: ['default*.less'],
        dest: 'docs/css/',
        ext: '.min.css'
      }
    },
    uncss: {
      core: {
        files: {
          'docs/css/core.mino.css': ['docs/index.html', 'docs/*.html']
        },
        options: {
          stylesheets: ['../docs/css/default.min.css']
        }
      },
      options: {
        report: 'gzip',
        uncssrc: '.uncssrc'
      }
    },
    csso: {
      dynamic_mappings: {
        expand: true,
        cwd: 'docs/css/',
        src: ['*.mino.css'],
        dest: 'docs/css/',
        ext: '.mino<%= pkg.assetVersion %>.css'
      }
    }
  })

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-csso')
  grunt.loadNpmTasks('grunt-uncss')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-shell')
  grunt.option('stack', true)

  // register at least this one task
  grunt.registerTask('default', [ 'uglify', 'less', 'uncss', 'csso' ])
}
