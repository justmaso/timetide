import { ColorModeButton } from './components/ui/color-mode'
import { Flex, Heading, HStack, Tabs } from "@chakra-ui/react"
import { PiWavesBold } from "react-icons/pi"
import { LuChartLine, LuHouse, LuSettings } from "react-icons/lu"
import { TimetideIcon } from './components/ui/icon'
import TimeInput from './components/TimeInput'

export const Title = () => {
    return (
        <HStack align="center">
            <TimetideIcon size="2xl" color="timetide.400">
                <PiWavesBold />
            </TimetideIcon>
            <Heading size="4xl">
                timetide
            </Heading>
        </HStack>
    )
}

export default function App() {
    return (
        <Flex flexDir="column" m="4" gapY="2" w="75%" mx="auto">
            <HStack justify="space-between">
                <Title />
                <ColorModeButton />
            </HStack>
            <Tabs.Root defaultValue="home" variant="line" size="lg" fitted>
                <Tabs.List>
                    <Tabs.Trigger value="home">
                        <TimetideIcon color="timetide.400">
                            <LuHouse />
                        </TimetideIcon>
                        home
                    </Tabs.Trigger>
                    <Tabs.Trigger value="stats">
                        <TimetideIcon color="timetide.400">
                            <LuChartLine />
                        </TimetideIcon>
                        stats
                    </Tabs.Trigger>
                    <Tabs.Trigger value="settings">
                        <TimetideIcon color="timetide.400">
                            <LuSettings />
                        </TimetideIcon>
                        settings
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="home">
                    <Flex columnGap="2" width="100%" justifyContent="center">
                        <TimeInput
                            title="task time"
                            time="000000"
                            setTime={() => {}}
                            progress={100}
                            disabled={false}
                            />
                        <TimeInput
                            title="rest time"
                            time="000000"
                            setTime={() => {}}
                            progress={100}
                            disabled={false}
                        />
                    </Flex>
                </Tabs.Content>
                <Tabs.Content value="stats">stats</Tabs.Content>
                <Tabs.Content value="settings">settings</Tabs.Content>
            </Tabs.Root>
        </Flex>
    )
}