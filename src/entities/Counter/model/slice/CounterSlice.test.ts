import { CounterSchema } from "../types/CounterSchema"
import { counterActions, counterReducer } from "./CounterSlice"

describe("CounterSlice.test", () => {
	test("decrement", () => {
		const state: CounterSchema = {value: 10}
		expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({value: 9})
	})
	test("increment", () => {
		const state: CounterSchema = {value: 10}
		expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({value: 11})
	})
	test("empty state", () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1})
	})
})