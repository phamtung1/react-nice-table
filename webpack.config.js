const pkg = require('./package.json');

module.exports = {
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
                exclude: /node_modules/,
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
          ],
    },
    entry: './src/index.ts',
    output: {
        filename: pkg.main,
        library: '',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json' ],
        modules: ['node_modules']
    }, 
    optimization: {
        minimize: true
    },
    externals: [
        // nodeExternals(),
        {
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
          },
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
          },
          "react-jss": {
            root: 'ReactJss',
            commonjs2: 'react-jss',
            commonjs: 'react-jss',
            amd: 'react-jss'
          }
        }
    ]
};