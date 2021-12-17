module.exports = {
    stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/react",
    babel: async (options) => {
        const res = {
            ...options,
            overrides: [
                ...options.overrides,
                {
                    presets: [
                        "@babel/preset-typescript",
                        [
                            "@babel/preset-react",
                            {
                                pragmaFrag: "React.Fragment",
                            },
                        ],
                    ],
                    plugins: ["@emotion/babel-plugin", "inline-react-svg"],
                },
            ],
            presets: [...options.presets.filter((a) => a.includes("@babel/preset-react"))],
        };

        return res;
    },
};
