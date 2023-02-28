import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginByUserName } from "../services/loginByUserName/loginByUserName"
import { LoginSchema } from "../types/loginSchema" 

const initialState: LoginSchema = {
	username: "",
	password: "",
	isLoading: false
}

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setUserPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUserName.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(loginByUserName.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(loginByUserName.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice