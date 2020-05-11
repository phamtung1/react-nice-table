var nodeExternals = require('webpack-node-externals');

module.exports = {
  stories: ['../src/NiceTable/stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-storysource', '@storybook/preset-typescript'],
  webpackFinal: async config => {
    
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
};