import { ThunkOptions } from "@/app/providers/StoreProvider"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUserDataByIdQuery } from "../../api/userApi"
import { User } from "../types/user"
import { USER_AUTH_KEY } from "@/shared/const/localstorage"

export const initAuthData = createAsyncThunk<User, void, ThunkOptions<string>>(
	"user/initAuthData",
	async (id, thunkAPI) => {
		const {rejectWithValue, dispatch} = thunkAPI
		try {
			const userId = localStorage.getItem(USER_AUTH_KEY)

			if (!userId) {
				return rejectWithValue("No userId")
			}

			const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()
            
			return response
		} catch (error) {
			return rejectWithValue("Ошибка получения данных пользователя")
		}
      
	}
)