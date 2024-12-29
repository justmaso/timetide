import { IconButton } from "@chakra-ui/react"
import { ColorModeButton } from "./components/ui/color-mode"
import { PiArrowsClockwiseBold } from "react-icons/pi"

export default function App() {
    return (
        <>
            <ColorModeButton />
            <IconButton
                onClick={() => console.log("nothing was the same")}
                variant="ghost"
                aria-label="toggle color mode"
                size="sm"
                color="timetide.400"
            >
                <PiArrowsClockwiseBold />
            </IconButton>
        </>
    )
}