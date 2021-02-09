import { CreateRecipeFunction, SuccessAPIResponse } from "../../types";
import EmailVerificationTheme from "../emailverification/components/themes/emailVerification";
import { EmailVerification } from "./components/features/emailVerification";
import { ThirdPartyUserInput } from "./types";
import ThirdPartyAuth from "./thirdpartyAuth";
import SignInAndUp from "./components/features/signInAndUp";
import SignInAndUpTheme from "./components/themes/signInAndUp";
import Apple from "./providers/apple";
import Google from "./providers/google";
import Twitter from "./providers/twitter";
import Facebook from "./providers/facebook";
import Github from "./providers/github";
import Custom from "./providers/custom";
export default class ThirdPartyAPIWrapper {
    static init(config: ThirdPartyUserInput): CreateRecipeFunction;
    static signOut(): Promise<SuccessAPIResponse>;
    static isEmailVerified(): Promise<boolean>;
    static Custom: typeof Custom;
    static Apple: typeof Apple;
    static Google: typeof Google;
    static Twitter: typeof Twitter;
    static Facebook: typeof Facebook;
    static Github: typeof Github;
}
declare const init: typeof ThirdPartyAPIWrapper.init;
declare const signOut: typeof ThirdPartyAPIWrapper.signOut;
declare const isEmailVerified: typeof ThirdPartyAPIWrapper.isEmailVerified;
export { ThirdPartyAuth, ThirdPartyAPIWrapper, init, Apple, Google, Twitter, Facebook, Github, Custom, isEmailVerified, SignInAndUp, SignInAndUpTheme, signOut, EmailVerification, EmailVerificationTheme };
