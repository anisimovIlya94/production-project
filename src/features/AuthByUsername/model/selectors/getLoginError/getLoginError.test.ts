import { getLoginError } from "./getLoginError"
import { StateSchema } from "./../../../../../app/providers/StoreProvider/config/StateSchema"
import { DeepPartial } from "@reduxjs/toolkit"

describe("getLoginError.test", () => {
	test("shoud return error", () => {
		const store: DeepPartial<StateSchema> = {
			login: {
				error: "error"
			}
		}
		expect(getLoginError(store as StateSchema)).toEqual("error")
	})

	test("empty store", () => {
		const store: DeepPartial<StateSchema> = {}
		expect(getLoginError(store as StateSchema)).toEqual(undefined)
	})
})