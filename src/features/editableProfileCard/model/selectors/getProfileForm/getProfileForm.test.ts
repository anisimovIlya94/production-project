import { getProfileForm } from "./getProfileForm"
import { StateSchema } from "@/app/providers/StoreProvider"
import { Currency } from "@/entities/Currency"
import { Country } from "@/entities/Country"

describe("getProfileData.test", () => {
	test("return state", () => {
		const form = {
			first: "Илья",
			lastname: "Анисимов",
			age: 28,
			currency: Currency.RUB,
			country: Country.Russia,
			city: "Ekb",
			username: "admin",
			avatar : "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
		}
		const state: DeepPartial<StateSchema> = {
			profile: {
				form
			}
		}
		expect(getProfileForm(state as StateSchema)).toEqual(form)
	})
    
	test("return undefined", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileForm(state as StateSchema)).toEqual(undefined)
	})
})