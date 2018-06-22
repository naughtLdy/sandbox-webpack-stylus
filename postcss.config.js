const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 3 versions', '> 1%']
    }),
    cssnano()
  ]
}
