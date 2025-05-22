import { createSystem, defaultConfig } from "@chakra-ui/react";
import { nonSemanticColours, semanticColours } from "./colours";
import { globalStyles } from "./global";


export const system = createSystem(defaultConfig, {
    globalCss: globalStyles,
    theme: {
        tokens: {
            colors: nonSemanticColours,
        },
        semanticTokens: {
            colors: semanticColours,
        }
    },
})
