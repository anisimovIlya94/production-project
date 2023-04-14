import { createSelector } from "@reduxjs/toolkit"
import { UserRole } from "../types/user"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"

export const getUserRole = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRole, (roles) => {
	return Boolean(roles?.includes(UserRole.ADMIN))
})

export const isUserManager = createSelector(getUserRole, (roles) => {
	return Boolean(roles?.includes(UserRole.MANAGER))
})