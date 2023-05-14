import { USER_AUTH_KEY } from "./../../../../shared/const/localstorage"
import { User } from "./../types/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserSchema } from "../types/user"
import { setFeaturesFlags } from "@/shared/lib/features/setGetFeatures"
import { saveJsonSettings } from "../services/saveJsonSettings"
import { JsonSettings } from "../types/jsonSettings"
import { initAuthData } from "../services/initAuthData"

const initialState: UserSchema = {
	_inited: false
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload
			setFeaturesFlags(action.payload.features)
			localStorage.setItem(USER_AUTH_KEY, action.payload.id)
		},
		// initialAuthData: (state) => {
		// 	const user = localStorage.getItem(USER_AUTH_KEY)
		// 	if (user) {
		// 		const json = JSON.parse(user)
		// 		state.authData = json
		// 		state._inited = true
		// 		setFeaturesFlags(json.features)
		// 	}
		// },
		logout: (state) => {
			state.authData = undefined
			localStorage.removeItem(USER_AUTH_KEY)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(saveJsonSettings.fulfilled, (
				state,
				action: PayloadAction<JsonSettings>
			) => {
				if (state.authData) {
					state.authData.jsonSettings = action.payload
				}
			})
			.addCase(initAuthData.fulfilled, (
				state,
				{payload}: PayloadAction<User>
			) => {
				state.authData = payload
				state._inited = true
				setFeaturesFlags(payload.features)
			})
			.addCase(initAuthData.rejected, (
				state
			) => {
				state._inited = true
			})
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice