import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import SignInUp from "../lib/ts/recipe/passwordless/components/themes/signInUp/index";
import {
    SIGN_IN_UP_LINK_ERROR,
    SIGN_IN_UP_CODE_CONSUME_RESTART_FLOW_ERROR,
    SIGN_IN_UP_RESEND_RESTART_FLOW_ERROR,
} from "../lib/ts/recipe/passwordless/constants";
import { withPasswordless } from "./passwordlessWrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Passwordless/SignInUp",
    component: SignInUp,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof SignInUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignInUp> = (args) => withPasswordless<any>(SignInUp, args);
const defaultArgs = { loaded: true };

export const EmailForm = Template.bind({});
EmailForm.args = { ...defaultArgs, configInput: { contactMethod: "EMAIL" } };

export const EmailFormTOS = Template.bind({});
EmailFormTOS.args = {
    ...defaultArgs,
    configInput: {
        contactMethod: "EMAIL",
        emailForm: { termsOfServiceLink: "https://supertokens.io", privacyPolicyLink: "https://supertokens.io" },
    },
};

export const EmailFormLinkRestart = Template.bind({});
EmailFormLinkRestart.args = { ...defaultArgs, configInput: { contactMethod: "EMAIL" }, error: SIGN_IN_UP_LINK_ERROR };

export const EmailFormResendRestart = Template.bind({});
EmailFormResendRestart.args = {
    ...defaultArgs,
    configInput: { contactMethod: "EMAIL" },
    error: SIGN_IN_UP_RESEND_RESTART_FLOW_ERROR,
};

export const EmailFormConsumeRestart = Template.bind({});
EmailFormConsumeRestart.args = {
    ...defaultArgs,
    configInput: { contactMethod: "EMAIL" },
    error: SIGN_IN_UP_CODE_CONSUME_RESTART_FLOW_ERROR,
};

export const MobileForm = Template.bind({});
MobileForm.args = { ...defaultArgs, configInput: { contactMethod: "PHONE" } };

export const MobileFormTOS = Template.bind({});
MobileFormTOS.args = {
    ...defaultArgs,
    configInput: {
        contactMethod: "PHONE",
        mobileForm: { termsOfServiceLink: "https://supertokens.io", privacyPolicyLink: "https://supertokens.io" },
    },
};

export const MobileFormLinkRestart = Template.bind({});
MobileFormLinkRestart.args = { ...defaultArgs, configInput: { contactMethod: "PHONE" }, error: SIGN_IN_UP_LINK_ERROR };

export const MobileFormResendRestart = Template.bind({});
MobileFormResendRestart.args = {
    ...defaultArgs,
    configInput: { contactMethod: "PHONE" },
    error: SIGN_IN_UP_RESEND_RESTART_FLOW_ERROR,
};

export const MobileFormConsumeRestart = Template.bind({});
MobileFormConsumeRestart.args = {
    ...defaultArgs,
    configInput: { contactMethod: "PHONE" },
    error: SIGN_IN_UP_CODE_CONSUME_RESTART_FLOW_ERROR,
};

export const UserInputCodeOTPOnly = Template.bind({});
const otpMocks = {
    resendCode: "OK",
    consumeCode: (input) => {
        const split = input.userInputCode.split(" ");
        if (split[0] === "exp") {
            return {
                status: "EXPIRED_USER_INPUT_CODE_ERROR",
                failedCodeInputAttemptCount: Number.parseInt(split[1]),
                maximumCodeInputAttempts: 5,
            };
        } else if (split[0] === "inv") {
            return {
                status: "INCORRECT_USER_INPUT_CODE_ERROR",
                failedCodeInputAttemptCount: Number.parseInt(split[1]),
                maximumCodeInputAttempts: 5,
            };
        }
        return {
            status: "OK",
        };
    },
};
UserInputCodeOTPOnly.args = {
    ...defaultArgs,
    loginAttemptInfo: { lastResend: 0, contactInfo: "test@example.com", flowType: "USER_INPUT_CODE" },
    mocks: otpMocks,
};

export const UserInputCodeResendOTPOnly = Template.bind({});
UserInputCodeResendOTPOnly.args = {
    ...defaultArgs,
    loginAttemptInfo: {
        lastResend: new Date().getTime(),
        contactInfo: "test@example.com",
        flowType: "USER_INPUT_CODE",
    },
    mocks: otpMocks,
};

export const UserInputCodePhone = Template.bind({});
UserInputCodePhone.args = {
    ...defaultArgs,
    loginAttemptInfo: { lastResend: 0, contactInfo: "+36 70 123 456", contactMethod: "PHONE" },
    mocks: otpMocks,
};

export const UserInputCodeResendPhone = Template.bind({});
UserInputCodeResendPhone.args = {
    ...defaultArgs,
    loginAttemptInfo: { lastResend: new Date().getTime(), contactInfo: "+36 70 123 456", contactMethod: "PHONE" },
    mocks: otpMocks,
};

export const UserInputCodeEmail = Template.bind({});
UserInputCodeEmail.args = {
    ...defaultArgs,
    loginAttemptInfo: { lastResend: 0, contactInfo: "test@example.com", contactMethod: "EMAIL" },
    mocks: otpMocks,
};

export const UserInputCodeResendEmail = Template.bind({});
UserInputCodeResendEmail.args = {
    ...defaultArgs,
    loginAttemptInfo: { lastResend: new Date().getTime(), contactInfo: "test@example.com", contactMethod: "EMAIL" },
    mocks: otpMocks,
};
const linkSentLoginAttemptInfoPhone = {
    lastResend: 0,
    flowType: "MAGIC_LINK",
    contactInfo: "+36 70 123 45612",
    contactMethod: "PHONE",
};

export const LinkSentPhone = Template.bind({});
LinkSentPhone.args = {
    ...defaultArgs,
    loginAttemptInfo: linkSentLoginAttemptInfoPhone,
    mocks: {
        resendCode: "OK",
    },
};

const linkSentLoginAttemptInfoEmail = {
    lastResend: 0,
    flowType: "MAGIC_LINK",
    contactInfo: "test@example.com",
    contactMethod: "EMAIL",
};
export const LinkSentEmail = Template.bind({});
LinkSentEmail.args = {
    ...defaultArgs,
    loginAttemptInfo: linkSentLoginAttemptInfoEmail,
    mocks: {
        resendCode: "OK",
    },
};

export const LinkSentEmailError = Template.bind({});
LinkSentEmailError.args = {
    ...LinkSentEmail.args,
    error: "General error from resend",
};

const linkSentLoginAttemptInfoPhoneRecentResend = {
    ...linkSentLoginAttemptInfoPhone,
    lastResend: new Date().getTime(),
};

export const LinkSentPhoneResend = Template.bind({});
LinkSentPhoneResend.args = {
    ...defaultArgs,
    loginAttemptInfo: linkSentLoginAttemptInfoPhoneRecentResend,
};

const linkSentLoginAttemptInfoEmailResend = {
    lastResend: new Date().getTime(),
    flowType: "MAGIC_LINK",
    contactInfo: "test@example.com",
    contactMethod: "EMAIL",
};

export const LinkSentEmailResend = Template.bind({});
LinkSentEmailResend.args = {
    ...defaultArgs,
    loginAttemptInfo: linkSentLoginAttemptInfoEmailResend,
};

export const CloseScreen = Template.bind({});
CloseScreen.args = {
    ...defaultArgs,
    successInAnotherTab: true,
};
