import { Country } from "@/entities/Country/model/types/country"
import { TestAsyncThunk } from "./../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk"
import { fetchProfileData } from "./fetchProfileData"
import { Currency } from "@/entities/Currency"

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
		const asyncThunk = new TestAsyncThunk(fetchProfileData)
		asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }))
		const result = await asyncThunk.CallThunk("1")
		expect(asyncThunk.api.get).toBeCalled()
		expect(result.payload).toEqual(data)
		expect(result.meta.requestStatus).toBe("fulfilled")
	})
    
	test("error", async () => {
		const asyncThunk = new TestAsyncThunk(fetchProfileData)
		asyncThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await asyncThunk.CallThunk("1")
		expect(asyncThunk.api.get).toBeCalled()
		expect(result.meta.requestStatus).toBe("rejected")
	})
})
