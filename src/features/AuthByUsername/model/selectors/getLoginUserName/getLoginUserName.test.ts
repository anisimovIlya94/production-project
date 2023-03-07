import { getLoginUserName } from "./getLoginUserName"
import { StateSchema } from "../../../../../app/providers/StoreProvider/config/StateSchema"
import { DeepPartial } from "@reduxjs/toolkit"

describe("getLoginError.test", () => {
	test("shoud return error", () => {
		const store: DeepPartial<StateSchema> = {
			login: {
				username: "123"
			}
		}
		expect(getLoginUserName(store as StateSchema)).toEqual("123")
	})

	test("empty store", () => {
		const store: DeepPartial<StateSchema> = {}
		expect(getLoginUserName(store as StateSchema)).toEqual("")
	})
})