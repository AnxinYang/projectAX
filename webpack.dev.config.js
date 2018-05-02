module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /js?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    debug: true,
};