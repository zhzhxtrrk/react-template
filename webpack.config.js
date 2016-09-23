module.exports = {
    entry: "./src/index",

    output: {
        filename: "./dist/app.bundle.js"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.less$/, loader: "style!css!less"}
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}