import { loginReducer, loginActions } from "../../model/slice/LoginSlice"
import { LoginSchema } from "../types/loginSchema"

describe("LoginSlice.test", () => {
	test("username", () => {
		const state: DeepPartial<LoginSchema> = {
			username: "123"
		}
		expect(loginReducer(state as LoginSchema, loginActions.setUserName("123123"))).toEqual({username: "123123"})
	})

	test("password", () => {
		const state: DeepPartial<LoginSchema> = {
			password: "123"
		}
		expect(loginReducer(state as LoginSchema, loginActions.setUserPassword("123123"))).toEqual({password: "123123"})
	})
})