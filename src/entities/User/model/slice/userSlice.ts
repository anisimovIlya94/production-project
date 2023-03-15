import { USER_AUTH_KEY } from "./../../../../shared/const/localstorage"
import { User } from "./../types/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserSchema } from "../types/user"

const initialState: UserSchema = {
	_inited: false
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload
		},
		initialAuthData: (state) => {
			const user = localStorage.getItem(USER_AUTH_KEY)
			if (user) {
				state.authData = JSON.parse(user)
				state._inited = true
			}
		},
		logout: (state) => {
			state.authData = undefined
			localStorage.removeItem(USER_AUTH_KEY)
		}
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice