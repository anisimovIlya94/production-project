import { User } from "entities/User/model/types/user"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { userActions } from "entities/User"
import { USER_AUTH_KEY } from "shared/const/localstorage"

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
	"login/loginByUserName",
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post<User>("http://localhost:8000/login", authData)
			if (!response.data) {
				throw new Error()
			}
			localStorage.setItem(USER_AUTH_KEY, JSON.stringify(response.data))
			thunkAPI.dispatch(userActions.setAuthData(response.data))
			return response.data
		} catch (error) {
			console.log(error)
			return thunkAPI.rejectWithValue("Введены неверно логин или пароль")
		}
      
	}
)