import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  mode: 'development',
  entry: './generators/app/index.js',
  target: 'node',
  externals: [nodeExternals()],
  externalsPresets: {
    node: true,
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
