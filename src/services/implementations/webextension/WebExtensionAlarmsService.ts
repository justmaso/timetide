import type { AlarmType } from "@/core/types/alarmTypes"
import type { AlarmPayload, IAlarmsService } from "@/services/interfaces/IAlarmsService"
import Browser from "webextension-polyfill"

export default class WebExtensionAlarmsService implements IAlarmsService {
    async createAlarm(payload: AlarmPayload): Promise<void> {
        Browser.alarms.create(payload.name, { when: payload.when })
    }

    async clearAlarm(name: AlarmType): Promise<boolean> {
        return await Browser.alarms.clear(name)
    }

    async clearAllAlarms(): Promise<boolean> {
        return await Browser.alarms.clearAll()
    }

    onAlarm(callback: (name: AlarmType) => void): void {
        Browser.alarms.onAlarm.addListener((alarm) => {
            callback(alarm.name as AlarmType)
        })
    }

    async getAlarm(name: AlarmType): Promise<any> {
        return await Browser.alarms.get(name)
    }

    async getAllAlarms(): Promise<any[]> {
        return await Browser.alarms.getAll()
    }
}
