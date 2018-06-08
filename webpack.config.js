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
    }

};