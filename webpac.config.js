var webpack = require ("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry : SRC_DIR + "/app/index.js",
    output : {
        path : DIST_DIR + "/app",
        filename : "bundle.js",
        publicPath: "/app"
    },

    module: {
        loader : [
            {
                test : /\.js?/,
                indlude : SRC_DIR,
                loader : "babel-loader",
                query : {
                    presets: ["react", "es2015", "env"]
                }
            }
        ]

    }
};

module.exports = config;