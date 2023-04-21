import { validateProfileData } from "./validateProfileData"
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
		const result = validateProfileData(data)
		expect(result).toEqual([])
	})
    
	test("without first and lastname", async () => {
		const result = validateProfileData({...data, first: "", lastname: ""})
		expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME])
	})
    
	test("without city", async () => {
		const result = validateProfileData({...data, city: ""})
		expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
	})
    
	test("without all", async () => {
		const result = validateProfileData({})
		expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_CITY])
	})


})
