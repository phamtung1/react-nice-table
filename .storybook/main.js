module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/preset-typescript'],
  webpackFinal: async config => {
    
    config.module.rules = config.module.rules.map(rule => {
      if (
        String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        }
      }
    
      return rule
    })
    
    // use svgr for svg files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    })

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
  };