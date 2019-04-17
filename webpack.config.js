const NODE_ENV = process.env.NODE_ENV;
//ToDo: add production settings

module.exports = {
  mode: NODE_ENV || 'production',
  entry: {
    main: './src/main.ts',
    sample: './src/sample.ts'   //ToDo: add automatically
  },
  output: {
    path: __dirname + '/dist/assets',
    filename: 'js/[name].js'
  },
  devServer: {
    inline: true,
    contentBase: 'dist',
    watchContentBase: true,
    publicPath: '/assets/',
    open: true,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test:  /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [
      '.ts',
      '.js'
    ]
  }
};
