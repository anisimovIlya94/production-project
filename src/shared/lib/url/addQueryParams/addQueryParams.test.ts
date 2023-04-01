import { getQueryParams } from "./addQueryParams"

describe("addQueryParams.test", () => {
	test("with one param", () => {
		const params = getQueryParams({
			test: "123"
		})
		expect(params).toBe("?test=123")
	})
	test("with many params", () => {
		const params = getQueryParams({
			test: "123",
			another: "112"
		})
		expect(params).toBe("?test=123&another=112")
	})
	test("with undefined param", () => {
		const params = getQueryParams({
			test: "123",
			another: undefined
		})
		expect(params).toBe("?test=123")
	})
})