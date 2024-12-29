import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                timetide: { value: "#38BDF8" },
            }
        },
        semanticTokens: {
            colors: {
                timetide: {
                    solid: { value: "{colors.timetide}" }
                }
            }
        }
    }
});
