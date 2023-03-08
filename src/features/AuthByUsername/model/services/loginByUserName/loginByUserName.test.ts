import { TestAsyncThunk } from "./../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk"
import { userActions } from "entities/User"
import { loginByUserName } from "./loginByUserName"



describe("loginByUserName.test", () => {
	// let dispatch: Dispatch
	// let getState: () => StateSchema

	// beforeEach(() => {
	//     dispatch = jest.fn()
	//     getState = jest.fn()
	// })

	test("success login", async () => {
		const userValue = { username: "123", id: "1" }
		// const action = loginByUserName({ username: "123", password: "123" })
		// const result = await action(dispatch, getState, undefined)
		const asyncThunk = new TestAsyncThunk(loginByUserName)
		asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
		const result = await asyncThunk.CallThunk({ username: "123", password: "123" })
		expect(asyncThunk.api.post).toBeCalled()
		expect(asyncThunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue))
		expect(asyncThunk.dispatch).toBeCalledTimes(3)
		expect(result.payload).toEqual({ username: "123", id: "1" })
		expect(result.meta.requestStatus).toBe("fulfilled")
	})
    
	test("error login", async () => {
		const asyncThunk = new TestAsyncThunk(loginByUserName)
		asyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await asyncThunk.CallThunk({ username: "123", password: "123" })
		expect(asyncThunk.api.post).toBeCalled()
		expect(asyncThunk.dispatch).toBeCalledTimes(2)
		expect(result.payload).toBe("Введены неверно логин или пароль")
		expect(result.meta.requestStatus).toBe("rejected")
	})
})
