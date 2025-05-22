import { Icon, IconButton } from "@chakra-ui/react"
import type React from "react"

interface IconProps {
    children?: React.ReactNode
    [key: string]: any
}

export const TimetideIcon: React.FC<IconProps> = ({ children, ...rest }) => {
    return (
        <Icon
            size="lg"
            {...rest}
        >
            { children }
        </Icon>
    )
}

export const TimetideIconButton: React.FC<IconProps> = ({ children, ...rest }) => {
    return (
        <IconButton
            size="lg"
            {...rest}
        >
            { children }
        </IconButton>
    )
}