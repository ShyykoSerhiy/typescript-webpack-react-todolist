var path = require("path");
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "dist/"
    },
    cssnext: {
        browsers: "last 2 versions"
    },
    resolve: {
        // Add `.ts` and `.tsx` and `.css` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.tsx?$/, loader: 'babel-loader!ts-loader'},
            // all files with a `.css` extension will be handled by `style`, `css` loaders
            {test: /\.css$/, loader: 'style!css!cssnext-loader'}
        ]
    }
};
