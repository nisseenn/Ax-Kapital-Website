module.exports = {
  entry: ['babel-polyfill', './src/main.jsx'],
  output: {
    path: __dirname + '/wwwroot',
    filename: "client.min.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader?localIdentName=[name]__[local]___[hash:base64:5]" },
      { test: /\.png$/, loader: "url-loader?limit=10000000" },
      { test: /\.jpg$/, loader: "url-loader?limit=10000000" },
      { test: /\.otf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
    ]
  }
};
