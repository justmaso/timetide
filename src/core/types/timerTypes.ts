export type TimerStatus = "idle" | "running" | "paused"
export type TimerMode = "idle" | "work" | "rest"
export type TimerPreset = "002500" | "000500"

export interface TimerState {
    status: TimerStatus,
    mode: TimerMode,
    lastWorkTimeString: TimerPreset | string,
    lastRestTimeString: TimerPreset | string,
    expectedWorkTimerEnd: number | null,
    expectedRestTimerEnd: number | null,
    secondsRemainingAtPause: number | null
}
