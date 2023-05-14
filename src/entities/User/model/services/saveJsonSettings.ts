import { JsonSettings } from "./../types/jsonSettings"
import { ThunkOptions } from "@/app/providers/StoreProvider"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { userApiMutation } from "../../api/userApi"
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData"
import { getJsonSettings } from "../selectors/getJsonSettings"

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkOptions<string>>(
	"user/saveJsonSettings",
	async (newJsonSettings, thunkAPI) => {
		console.log("ff")
		const {rejectWithValue, getState, dispatch} = thunkAPI
		try {
			const userData = getUserAuthData(getState())
			const currentJsonSettings = getJsonSettings(getState())

			if (!userData) {
				return rejectWithValue("No userData")
			}

			const response = await dispatch(userApiMutation({
				userId: userData?.id,
				jsonSettings: {
					...currentJsonSettings,
					...newJsonSettings
				}
			})).unwrap()

			if (!response.jsonSettings) {
				return rejectWithValue("No json settings")
			}
            
			return response.jsonSettings
		} catch (error) {
			return rejectWithValue("Ошибка сохранения json параметров")
		}
      
	}
)