/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @jsx jsx */
import { getDefaultStyles, getMergedStyles, swingIn } from "../../../../styles/styles";
import { NormalisedPalette, NormalisedDefaultStyles } from "../../../../types";
import { getStyles as getEmailPasswordStyles } from "../../../emailpassword/components/themes/styles/styles";

export function getStyles(palette: NormalisedPalette): NormalisedDefaultStyles {
    const baseStyles = getDefaultStyles(palette);
    const emailPasswordStyles = getEmailPasswordStyles(palette);
    const passwordlessStyles: NormalisedDefaultStyles = {
        generalSuccess: {
            marginBottom: "20px",
            animation: `${swingIn} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) alternate 2 both`,
        },
        codeInputLabelWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        headerSubtitle: {
            "& strong": {
                maxWidth: "100%",
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
        },
        sendCodeText: {
            marginTop: "15px",
            marginBottom: "20px",
            "& strong": {
                maxWidth: "100%",
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
        },
        secondaryLinkWithLeftArrow: {
            marginBottom: "40px",
        },
        resendCodeBtn: {
            width: "auto",
            marginTop: 0,
            lineHeight: "24px",
            "&:hover": {
                textDecoration: "underline",
            },
            "&:disabled": {
                color: palette.colors.textPrimary,
                cursor: "default",
                textDecoration: "none",
            },
        },
        phoneInputLibRoot: {
            display: "flex",
            alignItems: "center",

            "& .PhoneInput": {
                display: "flex",
                alignItems: "center",
            },

            "& .PhoneInputInput": {
                flex: "1 1",
                minWidth: "0",
                width: "100%",
                background: "transparent",
                border: "none",
                color: "inherit",
                outline: "none",
            },

            "& .PhoneInputCountryIcon": {
                color: palette.colors.textInput,
                width: "calc(1em * 1.5)",
                height: "1em",
            },

            "& .PhoneInputCountryIconImg": {
                display: "block",
                width: "100%",
                height: "100%",
            },

            "& .PhoneInputInternationalIconPhone": {
                opacity: "0.8",
            },

            "& .PhoneInputInternationalIconGlobe": {
                opacity: "0.65",
            },
        },
        phoneInputCountryControl: {
            "&:hover": {
                border: "none",
                boxShadow: "none",
            },
            backgroundColor: "inherit",
            border: "none",
            boxShadow: "none",
        },
        phoneInputCountryDropdown: {
            width: "min(72.2vw, 320px)",
            borderRadius: 6,
            marginLeft: "-15px", // This is to counteract the padding of the inputWrapper class
            boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.16)",
            "& > div": {
                paddingTop: 0,
            },
        },
        phoneInputCountryOption: {
            display: "flex",
            alignItems: "center",
            height: "34px",

            padding: "0 8px",

            "&[aria-selected='true']": {
                background: palette.colors.selectedBackground,
            },
        },
        phoneInputCountryOptionLabel: {
            color: palette.colors.textLabel,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            margin: "0 16px",
            "[aria-selected='true'] &": {
                color: palette.colors.textLink,
            },
        },
        phoneInputCountryOptionCallingCode: {
            color: palette.colors.textLabel,
            opacity: 0.5,
            "[aria-selected='true'] &": {
                opacity: 1,
            },
        },

        phoneInputCountrySelect: {
            display: "flex",
            alignItems: "center",
        },
        phoneInputCountryValueContainer: {
            padding: 0,
        },
        phoneInputCountryDropdownIndicator: {
            padding: "0 12px 0 6px",
        },
    };
    const recipeStyles = getMergedStyles(emailPasswordStyles, passwordlessStyles);
    return getMergedStyles(baseStyles, recipeStyles);
}
