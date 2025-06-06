export type InstallReason = "install" | "update" | "chrome_update" | "shared_module_update"

export interface InstalledDetails {
    reason: InstallReason
    previousVersion?: string
    temporary?: boolean
}

export interface MessageSender {
    id?: string
    url?: string
    tabId?: number
    frameId?: number
    origin?: string
    [key: string]: any
}
