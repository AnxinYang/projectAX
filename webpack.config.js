module.exports = {
    entry: [
        './src/index.js'
    ],
    node: {
        fs: 'empty',
        child_process: 'empty'
    },
    module: {
        rules: [
            {
                test: /js?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.css']
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },
<<<<<<< HEAD:webpack.config.js
    devtool: 'inline-source-map'
=======
    devtool: 'cheap-eval-source-map',
    debug: true,
>>>>>>> a2cb196748061c1f105f931bee3935f1b29574c1:webpack.dev.config.js
};