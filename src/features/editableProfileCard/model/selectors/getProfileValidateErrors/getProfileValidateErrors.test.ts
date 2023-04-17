import { getProfileValidateErrors } from "./getProfileValidateErrors"
import { StateSchema } from "app/providers/StoreProvider"
import { ValidateProfileError } from "../../consts/profileConsts"

describe("getProfileData.test", () => {
	test("return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USERNAME]
			}
		}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USERNAME])
	})
    
	test("return undefined", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
	})
})