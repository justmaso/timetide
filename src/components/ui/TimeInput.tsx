import { formatTimeString, padTimeString } from "@/utils/utils"
import {
    Heading,
    Input,
    ProgressRange,
    ProgressRoot,
    ProgressTrack,
    ProgressValueText,
    Skeleton,
    VStack
} from "@chakra-ui/react"
import { useRef } from "react"

interface TimeInputProps {
    loading: boolean,
    invalid: boolean,
    title: string
    time: string
    setTime?: (value: string) => void
    progress: number
    disabled: boolean
}

export default function TimeInput({
    loading,
    invalid,
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
            setTime(padTimeString(time.length < 6 ? time + e.key : time.slice(1) + e.key))
        // a digit was deleted
        } else if (e.key === "Backspace") {
            setTime(padTimeString(time.slice(0, -1)))
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
            <Heading mb="-2">{title}</Heading>
            <Skeleton loading={loading}>
                <Input
                    ref={inputRef}
                    value={formatTimeString(time)}
                    name={title}
                    onKeyDown={handleKeyPress}
                    onChange={() => {}} // avoids a console error
                    onSelect={handleCursor}
                    textAlign="center"
                    fontSize="xl"
                    inputMode="numeric"
                    readOnly={disabled}
                    borderColor={invalid ? "border.error" : undefined}
                    tabIndex={disabled ? -1 : undefined}
                />    
            </Skeleton>
            <ProgressRoot
                size="md"
                value={progress}
                shape="rounded"
                colorPalette="timetide"
                width="100%"
            >
                    <Skeleton loading={loading}>
                        <ProgressTrack>
                                <ProgressRange
                                    transition="none"
                                />
                        </ProgressTrack>
                    </Skeleton>
                    <Skeleton width="14" height="4" mt="0.5" loading={loading}>
                        <ProgressValueText>{`${progress.toFixed(2)}%`}</ProgressValueText>
                    </Skeleton>
            </ProgressRoot>
        </VStack>
    )
}