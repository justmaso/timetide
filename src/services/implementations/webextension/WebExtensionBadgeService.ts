import type { IBadgeService } from "@/services/interfaces/IBadgeService"
import Browser from "webextension-polyfill"

export default class WebExtensionBadgeService implements IBadgeService {
    async setBadgeText(text: string): Promise<void> {
        await Browser.action.setBadgeText({ text })
    }

    async clearBadgeText(): Promise<void> {
        await Browser.action.setBadgeText({ text: "" })
    }
}
