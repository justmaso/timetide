import type { II18nService } from "@/services/interfaces/II18nService"
import Browser from "webextension-polyfill"

export default class WebExtensionI18nService implements II18nService {
    t(key: string): string {
        return Browser.i18n.getMessage(key)
    }

    getLocale(): string {
        return Browser.i18n.getUILanguage()
    }

    setLocale(_locale: string): Promise<void> {
        // extensions can't dynamically change locale (no-op)
        return Promise.resolve()
    }
}
