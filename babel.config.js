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
            "@/services": "./src/services",
            "@/storage": "./src/storage",
            "@/lib": "./src/lib",
            "@/__tests__": "./__tests__",
            "@/hooks": "./src/hooks",
            "@/dtos": "./src/dtos",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
