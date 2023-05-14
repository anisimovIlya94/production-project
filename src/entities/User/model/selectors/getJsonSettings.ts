import { JsonSettings } from "./../types/jsonSettings"
import { buildSelector } from "@/shared/store/buildSelector"

const defaultSettings: JsonSettings = {}

export const [useJsonSettings, getJsonSettings] = buildSelector(state => state.user?.authData?.jsonSettings ?? defaultSettings)

export const [useJsonSettingsKey, getJsonSettingsKey] = buildSelector((state, key: keyof JsonSettings) => state.user?.authData?.jsonSettings?.[key])