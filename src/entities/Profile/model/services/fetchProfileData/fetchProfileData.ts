import { Profile } from "./../../types/profile"
import { ThunkOptions } from "./../../../../../app/providers/StoreProvider/config/StateSchema"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkOptions<string>>(
	"profile/fetchProfileData",
	async (_, thunkAPI) => {
		const {rejectWithValue, extra} = thunkAPI
		try {
			const response = await extra.api.get<Profile>("/profile")
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue("Ошибка в получении данных профиля")
		}
      
	}
)