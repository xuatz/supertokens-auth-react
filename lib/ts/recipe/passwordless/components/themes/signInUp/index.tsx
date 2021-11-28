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
/*
 * Imports.
 */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useContext } from "react";
import StyleContext from "../../../../../styles/styleContext";
import { hasFontDefined } from "../../../../../styles/styles";
import { SignInUpProps } from "../../../types";
import { ThemeBase } from "../themeBase";
import { EmailForm } from "./emailForm";
import { LinkEmailSent } from "./linkEmailSent";
import { MobileForm } from "./mobileForm";
import { SignInUpCodeInputFooter } from "./signInUpCodeInputFooter";
import { SignInUpCodeInputHeader } from "./signInUpCodeInputHeader";
import { SignInUpFooter } from "./signInUpFooter";
import { SignInUpHeader } from "./signInUpHeader";
import { UserInputCodeForm } from "./userInputCodeForm";

/*
 * Component.
 */

function SignInUpTheme(props: SignInUpProps): JSX.Element {
    const styles = useContext(StyleContext);
    const hasFont = hasFontDefined(props.config.rootStyle);

    const recipeAndConfig = {
        recipeImplementation: props.recipeImplementation,
        config: props.config,
    };

    return (
        <ThemeBase loadDefaultFont={!hasFont}>
            {props.loginAttemptInfo && props.loginAttemptInfo.flowType === "MAGICLINK" ? (
                <LinkEmailSent {...props} loginAttemptInfo={props.loginAttemptInfo} />
            ) : (
                <div data-supertokens="container" css={styles.container}>
                    <div data-supertokens="row" css={styles.row}>
                        {props.loaded &&
                            (!props.loginAttemptInfo ? (
                                props.config.contactInfoType === "EMAIL" ? (
                                    <EmailForm
                                        {...recipeAndConfig}
                                        error={props.error}
                                        header={<SignInUpHeader />}
                                        footer={<SignInUpFooter />}
                                    />
                                ) : (
                                    <MobileForm
                                        {...recipeAndConfig}
                                        error={props.error}
                                        header={<SignInUpHeader />}
                                        footer={<SignInUpFooter />}
                                    />
                                )
                            ) : (
                                <UserInputCodeForm
                                    {...recipeAndConfig}
                                    loginAttemptInfo={props.loginAttemptInfo}
                                    onSuccess={props.onSuccess}
                                    header={
                                        <SignInUpCodeInputHeader
                                            {...recipeAndConfig}
                                            loginAttemptInfo={props.loginAttemptInfo}
                                        />
                                    }
                                    footer={
                                        <SignInUpCodeInputFooter
                                            {...recipeAndConfig}
                                            loginAttemptInfo={props.loginAttemptInfo}
                                        />
                                    }
                                />
                            ))}
                    </div>
                </div>
            )}
        </ThemeBase>
    );
}

export default SignInUpTheme;