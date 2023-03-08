import { getLoginPassword } from "./getLoginPassword"
import { StateSchema } from "../../../../../app/providers/StoreProvider/config/StateSchema"

describe("getLoginError.test", () => {
	test("shoud return error", () => {
		const store: DeepPartial<StateSchema> = {
			login: {
				password: "123"
			}
		}
		expect(getLoginPassword(store as StateSchema)).toEqual("123")
	})

	test("empty store", () => {
		const store: DeepPartial<StateSchema> = {}
		expect(getLoginPassword(store as StateSchema)).toEqual("")
	})
})