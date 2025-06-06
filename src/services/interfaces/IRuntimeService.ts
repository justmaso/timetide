import type { InstalledDetails } from "@/core/types/runtimeTypes"

export interface IRuntimeService {
    onInstalled(callback: (reason: InstalledDetails) => void): void
    onMessage(callback: (message: any) => void): void
    sendMessage(message: any): Promise<any>
    getUrl(path: string): string
}
