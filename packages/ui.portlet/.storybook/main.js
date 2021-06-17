const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  // addons: ["@storybook/addon-knobs/register"],
  reactOptions: {
    fastRefresh: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          // ["react-app", { flow: false, typescript: true }],
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
        plugins: [
          ["@babel/plugin-proposal-nullish-coalescing-operator"],
          ["@babel/plugin-proposal-optional-chaining"],
        ],
      },
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
