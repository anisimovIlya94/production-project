import { getProfileIsLoading } from "./getProfileIsLoading"
import { StateSchema } from "app/providers/StoreProvider"

describe("getProfileData.test", () => {
	test("return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true
			}
		}
		expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
	})
    
	test("return undefined", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
			}}
		expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
	})
})