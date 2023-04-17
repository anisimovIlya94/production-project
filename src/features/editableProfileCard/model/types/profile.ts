import { Profile } from "entities/Profile"
import { ValidateProfileError } from "../consts/profileConsts"

export interface ProfileSchema {
    form?: Profile
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}

