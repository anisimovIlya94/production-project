import { FeaturesFlags } from "@/shared/lib/types/features"
import { UserRole } from "../consts/userConsts"
import { JsonSettings } from "./jsonSettings"

export interface User {
    id: string
    username: string,
    avatar?: string,
    roles?: UserRole[]
    features?: FeaturesFlags
    jsonSettings?: JsonSettings
}

export interface UserSchema {
    _inited: boolean
    authData?: User,
}