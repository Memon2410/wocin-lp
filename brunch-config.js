// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css'
    }
	},
  plugins: {
    sass: {
      sourceMapEmbed: true
    },
    babel: {
      presets: ['es2015', 'stage-0']
    }
  }
}
