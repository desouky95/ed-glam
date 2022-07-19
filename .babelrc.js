module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    ["@babel/preset-typescript", { isTSX: true, allowNamespaces: true , allExtensions:true }],
    "@babel/preset-flow",
  ],
};
