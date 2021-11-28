import {
    Config as RecipeModuleConfig,
    NormalisedConfig as NormalisedRecipeModuleConfig,
    UserInput as UserInputRecipeModule,
} from "../recipeModule/types";
export declare type User = {
    id: string;
    email: string;
};
export declare type UserInput<T, S, R> = UserInputRecipeModule<T, S, R>;
export declare type Config<T, S, R> = UserInput<T, S, R> & RecipeModuleConfig<T, S, R>;
export declare type NormalisedConfig<T, S, R> = NormalisedRecipeModuleConfig<T, S, R>;
export declare type GetRedirectionURLContext =
    | {
          action: "SUCCESS";
          isNewUser: boolean;
          redirectToPath?: string;
      }
    | {
          action: "SIGN_IN_AND_UP";
      };
export declare type OnHandleEventContext =
    | {
          action: "SESSION_ALREADY_EXISTS";
      }
    | {
          action: "SUCCESS";
          isNewUser: boolean;
          user: {
              id: string;
              email: string;
          };
      };