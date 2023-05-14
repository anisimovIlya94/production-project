import { ThunkOptions } from "@/app/providers/StoreProvider"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { userActions, User } from "@/entities/User"

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkOptions<string>>(
	"login/loginByUserName",
	async (authData, thunkAPI) => {
		const {dispatch, rejectWithValue, extra} = thunkAPI
		try {
			const response = await extra.api.post<User>("/login", authData)
			if (!response.data) {
				throw new Error()
			}
			dispatch(userActions.setAuthData(response.data))
			// extra.navigate?.("/about")
			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue("Введены неверно логин или пароль")
		}
      
	}
)