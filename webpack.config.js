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
};