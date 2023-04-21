import { ThunkOptions } from "./../../../../../app/providers/StoreProvider/config/StateSchema"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Profile } from "@/entities/Profile"

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkOptions<string>>(
	"profile/fetchProfileData",
	async (profileId, thunkAPI) => {
		const {rejectWithValue, extra} = thunkAPI
		try {
			const response = await extra.api.get<Profile>(`/profile/${profileId}`)
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