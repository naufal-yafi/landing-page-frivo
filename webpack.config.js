const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './build/script/pagination.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'script.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["css-loader"]
            }
        ]
    }
}