module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended"],
  plugins: ["jest"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module"
  }
}
