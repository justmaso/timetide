export const globalStyles = {
    // ensures the background has a smooth transition
    "html, body": {
        transition: "color 0.05s ease-in, background-color 0.15s ease-in !important",
    },
    // ensures that buttons have a smoooth transition
    "button": {
        transition: "background-color 0.14s ease-in, color 0.05s ease-in, border-color 0.23s ease-in !important",
    },
    // ensures consistent icon sizing
    ".chakra-button svg, svg.option": {
        width: "1.5rem !important",
        height: "1.5rem !important",
    },
    // ensures smooth background transitions
    "div.chakra-progress__track, span.chakra-switch__control, div.chakra-tabs__trigger": {
        transition: "background-color 0.15s ease-in !important",
    },
    // ensures smooth border transitions
    "input, .chakra-separator, .chakra-tabs__list": {
        transition: "border-color 0.15s ease-in !important",
    },
}