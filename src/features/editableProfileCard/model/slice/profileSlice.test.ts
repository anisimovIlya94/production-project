import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData"
import { profileActions, profileReducer } from "../../model/slice/profileSlice"
import { ProfileSchema, ValidateProfileError } from "../types/profile"

const data = {
	first: "Илья",
	lastname: "Анисимов",
	age: 28,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Ekb",
	username: "admin",
	avatar : "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
}

describe("profileSlice.test", () => {
	test("setReadonly", () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: false
		}
		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({readonly: true})
	})
    
	test("cancelUpdate", () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: false,
			form: { ...data, first: "" },
			validateErrors: [ValidateProfileError.INCORRECT_USERNAME],
			data
		}
		expect(profileReducer(state as ProfileSchema, profileActions.cancelUpdate())).toEqual({
			readonly: true,
			form: data,
			validateErrors: undefined,
			data
		})
	})
    
	test("updateData", () => {
		const state: DeepPartial<ProfileSchema> = {
			form: { ...data, age: 12 },
		}
		expect(profileReducer(state as ProfileSchema, profileActions.updateData({
			age: 28
		}))).toEqual({
			form: data,
		})
	})
    
	test("updateData pending", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.INCORRECT_USERNAME]
		}
		expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
			isLoading: true,
			validateErrors: undefined
		})
	})
    
	test("updateData fullfield", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			validateErrors: [ValidateProfileError.INCORRECT_USERNAME]
            
		}
		expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual({
			isLoading: false,
			validateErrors: undefined,
			form: data,
			data,
			readonly: true
		})
	})
})