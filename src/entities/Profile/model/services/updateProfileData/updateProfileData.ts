import { validateProfileData } from "./../validateProfileData/validateProfileData"
import { Profile, ValidateProfileError } from "./../../types/profile"
import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm"

export const updateProfileData = createAsyncThunk<Profile, void, ThunkOptions<ValidateProfileError[]>>(
	"profile/updateProfileData",
	async (_, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI
		const formData = getProfileForm(getState())
		const errors = validateProfileData(formData)
		if (errors.length) {
			return rejectWithValue(errors)
		}
		try {
			const response = await extra.api.put<Profile>("/profile", formData)

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
      
	}
)