export interface IBadgeService {
    setBadgeText(text: string): Promise<void>
    clearBadgeText(): Promise<void>
}
