const path = require("path");
const version = require("./package.json").version;

// Custom webpack rules
const rules = [
  { test: /\.ts$/, loader: "ts-loader" },
  { test: /\.js$/, loader: "source-map-loader" },
  { test: /\.css$/, use: ["style-loader", "css-loader"] },
];

// Packages that shouldn't be bundled but loaded at runtime
const externals = ["@jupyter-widgets/base"];

const resolve = {
  // Add '.ts' and '.tsx' as resolvable extensions.
  extensions: [".webpack.js", ".web.js", ".ts", ".js"],
};

module.exports = [
  /**
   * Embeddable npm_package_name bundle
   *
   * This bundle is almost identical to the notebook extension bundle. The only
   * difference is in the configuration of the webpack public path for the
   * static assets.
   *
   * The target bundle is always `dist/index.js`, which is the path required by
   * the custom widget embedder.
   */
  {
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "amd",
      library: "npm_package_name",
      publicPath: "https://unpkg.com/npm_package_name@" + version + "/dist/",
    },
    devtool: "source-map",
    module: {
      rules: rules,
    },
    externals,
    resolve,
  }
];
