const path = require('path');
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-prod', {
  entry: {
    index: path.resolve(__dirname, 'src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: '@chalix/frontend-component-footer',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    '@edx/frontend-platform': '@edx/frontend-platform',
    '@openedx/paragon': '@openedx/paragon',
    'prop-types': 'prop-types',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});

module.exports = config;
