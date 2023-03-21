import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AddCommentFormSchema } from "../types/addCommentForm"

const initialState: AddCommentFormSchema = {
	text: ""
}

export const addCommentFormSlice = createSlice({
	name: "addCommentForm",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		}
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(loginByUserName.pending, (state) => {
	// 			state.isLoading = true
	// 			state.error = undefined
	// 		})
	// 		.addCase(loginByUserName.fulfilled, (state) => {
	// 			state.isLoading = false
	// 		})
	// 		.addCase(loginByUserName.rejected, (state, action) => {
	// 			state.error = action.payload
	// 			state.isLoading = false
	// 		})
	// },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice