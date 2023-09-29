var path = require("path");
module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
  },
  // devServer: {
  //   port: 4001,
  //   host: "0.0.0.0",
  //   allowedHosts: [".cc-propeller.cloud"],
  //   publicPath: path.join(__dirname, "dist"),
  // },
};
