import { createSystem, defaultConfig } from "@chakra-ui/react"

// NOTE: "!important" is needed to prevent overwrites
export const system = createSystem(defaultConfig, {
    globalCss: {
        // ensures the background has a smooth transition
        "html, body": {
            transition: "color 0.05s ease-in, background-color 0.15s ease-in !important",
        },
        // ensures that buttons have a smoooth transition
        "button": {
            transition: "background-color 0.14s ease-in, color 0.05s ease-in, border-color 0.23s ease-in !important"
        },
        // ensures consistent icon sizing
        ".chakra-button svg": {
            width: "1.3rem !important",
            height: "1.3rem !important"
        }
    },
    theme: {
        tokens: {
            colors: {
                timetide: {
                    // intensities for the heat map
                    100: { value: "#CEEFFD" },
                    200: { value: "#9DDFFB" },
                    300: { value: "#6BCFFA" },
                    400: { value: "#38BDF8" }
                }
            },
        },
        semanticTokens: {
            colors: {
                timetide: {
                    solid: { value: "{colors.timetide.400}" },
                    contrast: { value: "{colors.timetide.400}" },
                    fg: { value: "{colors.timetide.400}" },
                    muted: { value: "{colors.timetide.400}" },
                    subtle: { value: "{colors.timetide.400}" },
                    emphasized: { value: "{colors.timetide.400}" },
                    focusRing: { value: "{colors.timetide.400}" },
                },
            },
        },
    },
});
