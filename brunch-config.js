// See http://brunch.io for documentation.
module.exports = {
  npm: {
    styles: {
      '@glidejs': ['glide/dist/css/glide.core.min.css']
    }
  },
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
