import { updateProfileData } from "./../services/updateProfileData/updateProfileData"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData"
import { ProfileSchema } from "../types/profile"
import { Profile } from "entities/Profile"

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: undefined,
	data: undefined,
	form: undefined
}

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		updateData: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload
			}
		},
		cancelUpdate: (state) => {
			state.readonly = true
			state.form = state.data
			state.validateErrors = undefined
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchProfileData.fulfilled, (
				state,
				action: PayloadAction<Profile>
			) => {
				state.isLoading = false
				state.form = action.payload
				state.data = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
			.addCase(updateProfileData.pending, (state) => {
				state.isLoading = true
				state.validateErrors = undefined
			})
			.addCase(updateProfileData.fulfilled, (
				state,
				action: PayloadAction<Profile>
			) => {
				state.isLoading = false
				state.form = action.payload
				state.data = action.payload
				state.readonly = true
				state.validateErrors = undefined
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.validateErrors = action.payload
				state.isLoading = false
			})
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice