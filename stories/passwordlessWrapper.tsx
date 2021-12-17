import React, { ComponentType } from "react";

import { ComponentOverrideContext } from "../lib/ts/components/componentOverride/componentOverrideContext";
import { StyleProvider } from "../lib/ts/styles/styleContext";
import { defaultPalette } from "../lib/ts/styles/styles";
import { getStyles } from "../lib/ts/recipe/passwordless/components/themes/styles";
import { normalisePasswordlessConfig } from "../lib/build/recipe/passwordless/utils";
import getRecipeImplementation from "../lib/build/recipe/passwordless/recipeImplementation";

export function withPasswordless<T>(
    Story: ComponentType<T>,
    { palette, style, rootStyle, overrideMap, mocks, configInput: config, ...rest }: any
) {
    const normalizedConf = normalisePasswordlessConfig(config || { contactMethod: "EMAIL" });
    const recipeImpl = getRecipeImplementation("passwordless", {} as any);
    for (const key of Object.keys(recipeImpl)) {
        if (recipeImpl[key] instanceof Function) {
            if (mocks && mocks[key]) {
                recipeImpl[key] = (...args) =>
                    new Promise((res) =>
                        res(
                            typeof mocks[key] === "function"
                                ? mocks[key](...args)
                                : {
                                      status: mocks[key],
                                  }
                        )
                    );
            } else {
                recipeImpl[key] = () => new Promise(() => {});
            }
        }
    }

    return (
        <StyleProvider
            rawPalette={palette || {}}
            defaultPalette={defaultPalette}
            styleFromInit={style || {}}
            rootStyleFromInit={rootStyle || {}}
            getDefaultStyles={getStyles}>
            <ComponentOverrideContext.Provider value={overrideMap || {}}>
                <Story config={normalizedConf} recipeImplementation={recipeImpl} {...rest} />
            </ComponentOverrideContext.Provider>
        </StyleProvider>
    );
}
