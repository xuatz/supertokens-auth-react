export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(palette|background|color|primary)$/i,
            date: /lastResend$/,
        },
    },
};
