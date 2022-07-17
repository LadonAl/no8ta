const path = require("path");
const { mergeConfig, loadConfigFromFile } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
    },
    features: {
        storyStoreV7: true,
    },
    viteFinal: async function(config, { configType }) {
        const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, "../vite.config.ts"));
        return mergeConfig(config, {
            ...userConfig,
            plugins: [
                react({
                    // @TODO: figure out why it doesn't work without this
                    jsxRuntime: "classic",
                    include: ["**/*.json", "**/*.less"], // it's unnecessary and cause the page full-reload
                }),
            ],
        });
    },
};