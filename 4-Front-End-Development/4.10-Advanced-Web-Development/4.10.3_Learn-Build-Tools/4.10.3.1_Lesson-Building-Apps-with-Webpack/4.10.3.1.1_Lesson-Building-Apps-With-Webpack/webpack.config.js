const path = require("path");
module.exports = {
  entry: "./src/uncooked/ingredients.js",
  output: {
    filename: "soup.js",
    path: path.resolve(__dirname, "steamy"),
  },
  mode: "development",
};
