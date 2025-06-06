import type { StorageArea } from "@/core/types/storageTypes"

export type StorageChangeCallback<T> = (newValue: T, oldValue?: T) => void

export interface IStorageService {
    get<T>(key: string, area?: StorageArea): Promise<T | undefined>
    set<T>(key: string, value: T, area?: StorageArea): Promise<void>
    subscribe<T>(key: string, callback: (value: T) => void): void
    unsubscribe<T>(key: string, callback: (value: T) => void): void
}
