import type { TimerState } from "../types/timerTypes"
import type { UserSettings } from "../types/settingsTypes"

export const defaultTimerState: TimerState = {
    status: "idle",
    mode: "idle",
    lastWorkTimeString: "002500",
    lastRestTimeString: "000500",
    expectedWorkTimerEnd: null,
    expectedRestTimerEnd: null,
    secondsRemainingAtPause: null
}

export const defaultUserSettings: UserSettings = {
    soundsEnabled: true,
    notificationsEnabled: true,
    loopSessions: false
}
