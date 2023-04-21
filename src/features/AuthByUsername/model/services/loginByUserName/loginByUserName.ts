import { ThunkOptions } from "./../../../../../app/providers/StoreProvider/config/StateSchema"
import { User } from "@/entities/User/model/types/user"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { userActions } from "@/entities/User"
import { USER_AUTH_KEY } from "@/shared/const/localstorage"

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
			localStorage.setItem(USER_AUTH_KEY, JSON.stringify(response.data))
			dispatch(userActions.setAuthData(response.data))
			// extra.navigate?.("/about")
			return response.data
		} catch (error) {
			console.log(error)
			return rejectWithValue("Введены неверно логин или пароль")
		}
      
	}
)