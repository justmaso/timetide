import type { Alarms } from "webextension-polyfill"
import type { AlarmType } from "@/core/types/alarmTypes"

export interface AlarmPayload {
    name: AlarmType,
    when: number
}

export interface IAlarmsService {
    createAlarm(payload: AlarmPayload): Promise<void>
    clearAlarm(name: AlarmType): Promise<boolean>
    clearAllAlarms(): Promise<boolean>
    onAlarm(callback: (name: AlarmType) => void): void
    getAlarm(name: AlarmType): Promise<Alarms.Alarm | undefined>
    getAllAlarms(): Promise<Alarms.Alarm[]>
}
