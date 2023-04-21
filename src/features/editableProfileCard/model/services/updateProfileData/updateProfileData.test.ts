import { TestAsyncThunk } from "./../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk"
import { updateProfileData } from "./updateProfileData"
import { Currency } from "@/entities/Currency"
import { Country } from "@/entities/Country"
import { ValidateProfileError } from "../../consts/profileConsts"

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

describe("fetchProfileData.test", () => {
	test("success", async () => {
		const asyncThunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
				isLoading: false,
				readonly: true
			}
		})
		asyncThunk.api.put.mockReturnValue(Promise.resolve({ data }))
		const result = await asyncThunk.CallThunk()
		expect(asyncThunk.api.put).toBeCalled()
		expect(result.payload).toEqual(data)
		expect(result.meta.requestStatus).toBe("fulfilled")
	})
    
	test("error", async () => {
		const asyncThunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
				isLoading: false,
				readonly: true
			}
		})
		asyncThunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await asyncThunk.CallThunk()
		expect(asyncThunk.api.put).toBeCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
	})
    
	test("validate error", async () => {
		const asyncThunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: {...data, first: ""},
				isLoading: false,
				readonly: true
			}
		})
		const result = await asyncThunk.CallThunk()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USERNAME])
	})
})
