let path = require('path');
let SRC_DIR = path.join(__dirname, '/src');
let DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['env', 'react'],
          env : {
            test : {
              presets: ['es2015']
            }
          }
        }
      }
    ]
  }
};