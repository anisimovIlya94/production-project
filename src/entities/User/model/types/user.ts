import { FeaturesFlags } from "@/shared/lib/types/features"
import { UserRole } from "../consts/userConsts"

export interface User {
    id: string
    username: string,
    avatar?: string,
    roles?: UserRole[]
    features?: FeaturesFlags
}

export interface UserSchema {
    _inited: boolean
    authData?: User,
}