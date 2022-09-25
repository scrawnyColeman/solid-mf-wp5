const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {},

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8084,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,

        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-typescript",
            "babel-preset-solid",
            "@babel/preset-env",
          ],
          plugins: [["@babel/transform-runtime"]],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "solid_mfe",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Button": "./src/exposed/Button.ts",
        "./App": "./src/exposed/App.ts",
      },
      shared: {
        ...deps,
        "solid-js": {
          singleton: true,
          requiredVersion: deps["solid-js"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
