import type { NotificationType } from "@/core/types/notificationTypes"

export interface INotificationsService {
    create(
        notificationID: NotificationType,
        iconUrl: string,
        title: string,
        message: string
    ): Promise<void>
    clear(notificationID: string): Promise<void>
}
