import { getLoginIsLoading } from "./getLoginIsLoading"
import { StateSchema } from "../../../../../app/providers/StoreProvider/config/StateSchema"
import { DeepPartial } from "@reduxjs/toolkit"

describe("getLoginError.test", () => {
	test("shoud return error", () => {
		const store: DeepPartial<StateSchema> = {
			login: {
				isLoading: true
			}
		}
		expect(getLoginIsLoading(store as StateSchema)).toEqual(true)
	})

	test("empty store", () => {
		const store: DeepPartial<StateSchema> = {}
		expect(getLoginIsLoading(store as StateSchema)).toEqual(false)
	})
})