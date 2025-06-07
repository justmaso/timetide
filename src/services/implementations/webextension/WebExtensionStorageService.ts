import type { StorageArea } from "@/core/types/storageTypes"
import type { IStorageService, StorageChangeCallback } from "@/services/interfaces/IStorageService"
import Browser from "webextension-polyfill"

export default class WebExtensionStorageService implements IStorageService {
    private listeners = new Map<string, Set<StorageChangeCallback<any>>>()

    constructor() {
        Browser.storage.onChanged.addListener(this.handleStorage)
    }

    private handleStorage = (
        changes: { [key: string]: Browser.Storage.StorageChange },
        _areaName: string
    ) => {
        for (const [key, change] of Object.entries(changes)) {
            if (!change) continue
            const callbacks = this.listeners.get(key)
            if (callbacks) {
                for (const cb of callbacks) {
                    cb(change.newValue)
                }
            }
        }
    }

    private getStorageArea(area: StorageArea = "local") {
        return area === "sync"
            ? Browser.storage.sync
            : Browser.storage.local
    }

    async get<T>(key: string, area: StorageArea = "local"): Promise<T | undefined> {
        const result = await this.getStorageArea(area).get(key)
        return result[key] as T | undefined
    }

    async set<T>(key: string, value: T, area: StorageArea = "local") {
        await this.getStorageArea(area).set({
            [key]: value
        })
    }

    subscribe<T>(key: string, callback: (value: T) => void): void {
        if (!this.listeners.has(key)) {
            this.listeners.set(key, new Set())
        }
        this.listeners.get(key)!.add(callback)
    }

    unsubscribe<T>(key: string, callback: (value: T) => void): void {
        const keyListeners = this.listeners.get(key)
        if (keyListeners) {
            keyListeners.delete(callback)
            if (keyListeners.size === 0) {
                this.listeners.delete(key)
            }
        }
    }
}
