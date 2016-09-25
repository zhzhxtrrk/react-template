module.exports = {
    entry: "./src/index",

    output: {
        path: "./dist",
        filename: "app.bundle.js"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.png$/, loader: "url?limit=10000" },
            { test: /\.eot$/, loader: "url?limit=10000" },
            { test: /\.ttf$/, loader: "url?limit=10000" },
            { test: /\.svg$/, loader: "url?limit=10000" },
            { test: /\.woff$/, loader: "url?limit=10000" },
            { test: /\.woff2$/, loader: "url?limit=10000" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}