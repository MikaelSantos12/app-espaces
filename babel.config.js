module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@/assets": "./src/assets",
            "@/components": "./src/components",
            "@/routes": "./src/routes",
            "@/screens": "./src/screens",
            "@/storage": "./src/storage",
            "@/theme": "./src/theme",
            "@/utils": "./src/utils",
            "@/lib": "./src/lib",
            "@/__tests__": "./__tests__",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
