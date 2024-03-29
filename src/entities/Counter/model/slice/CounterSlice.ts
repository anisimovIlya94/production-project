import { buildSlice } from "@/shared/store/buildSlice"
import { CounterSchema } from "../../"
import { PayloadAction } from "@reduxjs/toolkit"

const initialState: CounterSchema = {
	value: 0,
}

export const counterSlice = buildSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		add: (state, { payload }: PayloadAction<number>) => {
			state.value += payload
		},
		decrement: (state) => {
			state.value -= 1
		}
	},
})

export const {
	actions: counterActions,
	reducer: counterReducer,
	useActions: useCounterActions
} = counterSlice