export type NotificationType = "work" | "rest"
export type NotificationContext = "workEnd" | "restEndNoLoop" | "restEndLoop"

export interface NotiifcationI18nKeys {
    titleKey: string,
    messageKey: string
}

export const notificationI18nMap: Record<NotificationContext, NotiifcationI18nKeys> = {
    workEnd: {
        titleKey: "notificationTitleWorkEnd",
        messageKey: "notificationMessageWorkEnd"
    },
    restEndNoLoop: {
        titleKey: "notificationTitleRestEnd",
        messageKey: "notificationMessageRestEndNoLoop"
    },
    restEndLoop: {
        titleKey: "notificationTitleRestEnd",
        messageKey: "notificationMessageWorkEndLoop"
    }
}
