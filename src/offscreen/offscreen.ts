
import { createRuntimeService } from "@/factories/serviceFactory"
import type { SoundEvent } from "@/core/types/soundEvents"

const runtimeService = createRuntimeService()

runtimeService.onMessage((message) => {
    if (message.target === "offscreen" && message.soundEvent) {
        const audioMap: Record<SoundEvent, HTMLAudioElement | null> = {
            work: document.getElementById("work-timer-end") as HTMLAudioElement | null,
            rest: document.getElementById("rest-timer-end") as HTMLAudioElement | null
        }

        const audioToPlay = audioMap[message.soundEvent as SoundEvent]
        if (audioToPlay) {
            audioToPlay.play().catch(console.error)
        } else {
            console.error("audio element not found for sound event:", message.soundEvent)
        }
    }
})
