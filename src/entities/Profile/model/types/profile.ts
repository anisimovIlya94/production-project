import { Country } from "./../../../Country/model/types/country"
import { Currency } from "entities/Currency"

export interface Profile {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

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

