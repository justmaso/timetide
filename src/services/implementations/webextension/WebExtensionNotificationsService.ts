import type { NotificationType } from "@/core/types/notificationTypes"
import type { INotificationsService } from "@/services/interfaces/INotificationsService"
import Browser from "webextension-polyfill"

export default class WebExtensionNotificationsService implements INotificationsService {
    async create(
        notificationID: NotificationType,
        iconUrl: string,
        title: string,
        message: string
    ): Promise<void> {
        await Browser.notifications.create(notificationID, {
            type: "basic",
            iconUrl,
            title,
            message
        })

        // clear the notification after 3s
        setTimeout(async () => await this.clear(notificationID), 3000)
    }

    async clear(notificationID: string): Promise<void> {
        await Browser.notifications.clear(notificationID)
    }
}
