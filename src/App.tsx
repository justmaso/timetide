import { Flex, Heading, HStack, Tabs } from "@chakra-ui/react"
import { PiWavesBold } from "react-icons/pi"
import { LuChartLine, LuHouse, LuSettings } from "react-icons/lu"
import { TimetideIcon } from './components/ui/icon'
import TimeInput from './components/TimeInput'
import { Tooltip } from './components/ui/tooltip'

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
        <Flex flexDir="column" p="4" gapY="2" mx="auto">
            <Tabs.Root defaultValue="home" variant="outline" size="sm">
                <Tabs.List justifyContent="space-between">
                    <HStack mt="-2">
                        <Title />
                    </HStack>
                    <HStack>
                        <Tooltip
                            content="home"
                            showArrow
                            positioning={{ placement: "left" }}
                        >
                            <Tabs.Trigger value="home">
                                <TimetideIcon color="timetide.400">
                                    <LuHouse />
                                </TimetideIcon>
                            </Tabs.Trigger>
                        </Tooltip>
                        <Tooltip
                            content="stats"
                            showArrow
                        >
                            <Tabs.Trigger value="stats">
                                <TimetideIcon color="timetide.400">
                                    <LuChartLine />
                                </TimetideIcon>
                            </Tabs.Trigger>
                        </Tooltip>
                        <Tooltip
                            content="settings"
                            showArrow
                        >
                            <Tabs.Trigger value="settings">
                                <TimetideIcon color="timetide.400">
                                    <LuSettings />
                                </TimetideIcon>
                            </Tabs.Trigger>
                        </Tooltip>
                    </HStack>
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