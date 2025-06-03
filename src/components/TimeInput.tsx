import {
    Heading,
    Input,
    ProgressRange,
    ProgressRoot,
    ProgressTrack,
    ProgressValueText,
    VStack
} from "@chakra-ui/react"
import { useRef } from "react"

interface TimeInputProps {
    title: string
    time: string
    setTime?: (value: string) => void
    progress: number
    disabled: boolean
}

export default function TimeInput({
    title,
    time,
    setTime,
    progress,
    disabled
}: TimeInputProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    // sets the relevant state
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!setTime || disabled) return

        // a valid digit was inputted
        if (e.key >= "0" && e.key <= "9") {
            setTime(time.length < 6 ? time + e.key : time.slice(1) + e.key)
        // a digit was deleted
        } else if (e.key === "Backspace") {
            setTime(time.slice(0, -1))
        }
    }

    // keeps the cursor at the end
    const handleCursor = () => {
        if (inputRef.current) {
            const length = inputRef.current.value.length
            inputRef.current.setSelectionRange(length, length)
        }
    }

    return (
        <VStack align="flex-start">
            <Heading>{title}</Heading>
            <Input
                ref={inputRef}
                value={time}
                name={title}
                onKeyDown={handleKeyPress}
                onChange={() => {}} // avoids a console error
                onSelect={handleCursor}
                textAlign="center"
                fontSize="xl"
                inputMode="numeric"
                readOnly={disabled}
            />
            <ProgressRoot
                size="md"
                value={progress}
                shape="rounded"
                colorPalette="timetide"
                width="100%"
            >
                <ProgressTrack>
                    <ProgressRange />
                </ProgressTrack>
                <ProgressValueText>{`${progress.toFixed(2)}%`}</ProgressValueText>
            </ProgressRoot>
        </VStack>
    )
}