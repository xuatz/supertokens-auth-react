import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinkClickedScreen } from "../lib/ts/recipe/passwordless/components/themes/linkClickedScreen";
import { withPasswordless } from "./passwordlessWrapper";
import HydrogenTheme from "../examples/for-tests/src/Themes/Hydrogen";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Passwordless/LinkClickedScreen",
    component: LinkClickedScreen,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof LinkClickedScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkClickedScreen> = (args) => withPasswordless<any>(LinkClickedScreen, args);

const defaultArgs = {};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Styled = Template.bind({});
Styled.args = { ...defaultArgs, palette: HydrogenTheme.colors, style: HydrogenTheme.style };
