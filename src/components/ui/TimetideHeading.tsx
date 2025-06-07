import { Heading, HStack } from "@chakra-ui/react"
import { TimetideIcon } from "./icon"
import { PiWavesBold } from "react-icons/pi"

export const TimetideHeading = () => {
    return (
        <HStack align="center" mt="-2" ml="-1.5">
            <TimetideIcon size="2xl" color="timetide.400">
                <PiWavesBold />
            </TimetideIcon>
            <Heading size="4xl" ml="-1">timetide</Heading>
        </HStack>
    )
}