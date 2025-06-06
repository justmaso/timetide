import type { SoundEvent } from "@/core/types/soundEvents"

export interface IAudioService {
    playSound(soundEvent: SoundEvent): Promise<void>
}
