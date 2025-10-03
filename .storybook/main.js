
const path = require('path');

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config, { configType }) {
    // Ensure imports to @storybook/react resolve to the react package bundled with react-vite
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@storybook/react'] = path.resolve(__dirname, '../node_modules/@storybook/react-vite/node_modules/@storybook/react');
    return config;
  }
};

module.exports = config;