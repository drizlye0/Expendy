const plugins = [];

plugins.push([
  "module-resolver",
  {
    root: ["./src"],
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": "./src",
    },
  },
]);

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins,
  };
};
