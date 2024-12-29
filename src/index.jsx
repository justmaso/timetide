import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";
import { ColorModeProvider } from "./components/ui/color-mode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ChakraProvider value={system}>
            <ColorModeProvider>
                <App />
            </ColorModeProvider>
        </ChakraProvider>
    </React.StrictMode>
);
