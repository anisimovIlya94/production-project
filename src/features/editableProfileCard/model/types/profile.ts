import { Profile } from "entities/Profile"

export interface ProfileSchema {
    form?: Profile
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}

export enum ValidateProfileError {
    INCORRECT_USERNAME = "INCORRECT_USERNAME",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_CITY = "INCORRECT_CITY",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}

