import { Heading, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";

export default function App() {
    return (
        <HStack>
            <Heading size="2xl" color="timetide">timetide: project init</Heading>
            <ColorModeButton />
        </HStack>
    )
}