import type { InstalledDetails, InstallReason } from "@/core/types/runtimeTypes"
import type { IRuntimeService } from "@/services/interfaces/IRuntimeService"
import Browser, { type Runtime } from "webextension-polyfill"

export default class WebExtensionRuntimeService implements IRuntimeService {
    onInstalled(callback: (details: InstalledDetails) => void): void {
        Browser.runtime.onInstalled.addListener((details: Runtime.OnInstalledDetailsType) => {
            const mappedDetails: InstalledDetails = {
                reason: details.reason as InstallReason,
                previousVersion: details.previousVersion,
                temporary: details.temporary
            }
            callback(mappedDetails)
        })
    }

    onMessage(callback: (message: any) => void): void {
        Browser.runtime.onMessage.addListener((message: any) => {
            callback(message)
        })
    }

    async sendMessage(message: any): Promise<any> {
        return Browser.runtime.sendMessage(message)
    }

    getUrl(path: string): string {
        return Browser.runtime.getURL(path)
    }
}
