import React from "react";

import * as defaultStories from "./SignInUp.stories";
import HydrogenTheme from "../examples/for-tests/src/Themes/Hydrogen";

export default {
    ...defaultStories.default,
    title: defaultStories.default.title + " with style",
};

function getStyledStory(story) {
    const styledStory = story.bind({});
    styledStory.args = {
        ...story.args,
        palette: HydrogenTheme.colors,
        style: HydrogenTheme.style,
    };
    return styledStory;
}

type Styled<T> = {
    [K in keyof T as `Styled${string & K}`]: T[K];
};

const styledStories: Styled<Omit<typeof defaultStories, "default">> = {
    StyledEmailForm: getStyledStory(defaultStories.EmailForm),
    StyledMobileForm: getStyledStory(defaultStories.MobileForm),
    StyledLinkSentEmail: getStyledStory(defaultStories.LinkSentEmail),
    StyledLinkSentEmailResend: getStyledStory(defaultStories.LinkSentEmailResend),
    StyledLinkSentPhone: getStyledStory(defaultStories.LinkSentPhone),
    StyledLinkSentPhoneResend: getStyledStory(defaultStories.LinkSentPhoneResend),
    StyledEmailFormConsumeRestart: getStyledStory(defaultStories.EmailFormConsumeRestart),
    StyledEmailFormLinkRestart: getStyledStory(defaultStories.EmailFormLinkRestart),
    StyledEmailFormResendRestart: getStyledStory(defaultStories.EmailFormResendRestart),
    StyledEmailFormTOS: getStyledStory(defaultStories.EmailFormTOS),
    StyledLinkSentEmailError: getStyledStory(defaultStories.LinkSentEmailError),
    StyledMobileFormConsumeRestart: getStyledStory(defaultStories.MobileFormConsumeRestart),
    StyledMobileFormLinkRestart: getStyledStory(defaultStories.MobileFormLinkRestart),
    StyledMobileFormResendRestart: getStyledStory(defaultStories.MobileFormResendRestart),
    StyledMobileFormTOS: getStyledStory(defaultStories.MobileFormTOS),
    StyledUserInputCodeEmail: getStyledStory(defaultStories.UserInputCodeEmail),
    StyledUserInputCodeOTPOnly: getStyledStory(defaultStories.UserInputCodeOTPOnly),
    StyledUserInputCodePhone: getStyledStory(defaultStories.UserInputCodePhone),
    StyledUserInputCodeResendEmail: getStyledStory(defaultStories.UserInputCodeResendEmail),
    StyledUserInputCodeResendOTPOnly: getStyledStory(defaultStories.UserInputCodeResendOTPOnly),
    StyledUserInputCodeResendPhone: getStyledStory(defaultStories.UserInputCodeResendPhone),
    StyledCloseScreen: getStyledStory(defaultStories.CloseScreen),
};

export const StyledEmailForm = styledStories.StyledEmailForm;
export const StyledMobileForm = styledStories.StyledMobileForm;
export const StyledLinkSentEmail = styledStories.StyledLinkSentEmail;
export const StyledLinkSentEmailResend = styledStories.StyledLinkSentEmailResend;
export const StyledLinkSentPhone = styledStories.StyledLinkSentPhone;
export const StyledLinkSentPhoneResend = styledStories.StyledLinkSentPhoneResend;
export const StyledEmailFormConsumeRestart = styledStories.StyledEmailFormConsumeRestart;
export const StyledEmailFormLinkRestart = styledStories.StyledEmailFormLinkRestart;
export const StyledEmailFormResendRestart = styledStories.StyledEmailFormResendRestart;
export const StyledEmailFormTOS = styledStories.StyledEmailFormTOS;
export const StyledLinkSentEmailError = styledStories.StyledLinkSentEmailError;
export const StyledMobileFormConsumeRestart = styledStories.StyledMobileFormConsumeRestart;
export const StyledMobileFormLinkRestart = styledStories.StyledMobileFormLinkRestart;
export const StyledMobileFormResendRestart = styledStories.StyledMobileFormResendRestart;
export const StyledMobileFormTOS = styledStories.StyledMobileFormTOS;
export const StyledUserInputCodeEmail = styledStories.StyledUserInputCodeEmail;
export const StyledUserInputCodeOTPOnly = styledStories.StyledUserInputCodeOTPOnly;
export const StyledUserInputCodePhone = styledStories.StyledUserInputCodePhone;
export const StyledUserInputCodeResendEmail = styledStories.StyledUserInputCodeResendEmail;
export const StyledUserInputCodeResendOTPOnly = styledStories.StyledUserInputCodeResendOTPOnly;
export const StyledUserInputCodeResendPhone = styledStories.StyledUserInputCodeResendPhone;
export const StyledCloseScreen = styledStories.StyledCloseScreen;
