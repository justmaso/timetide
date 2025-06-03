import { createSystem, defaultConfig } from "@chakra-ui/react"
import { nonSemanticColours, semanticColours } from "./colours"


export const system = createSystem(defaultConfig, {
    // globalCss: globalStyles,
    theme: {
        tokens: {
            colors: nonSemanticColours,
        },
        semanticTokens: {
            colors: semanticColours,
        }
    },
})
