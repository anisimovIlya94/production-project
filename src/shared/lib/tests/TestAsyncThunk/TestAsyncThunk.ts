import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { AsyncThunkAction } from "@reduxjs/toolkit"

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) =>  AsyncThunkAction <Return, Arg, {
    rejectValue: RejectValue;
}>

export class TestAsyncThunk<Return, Arg, RejectValue>{
	dispatch: jest.MockedFn<any>
	getState: () => StateSchema
	actionCreator: ActionCreatorType<Return, Arg, RejectValue>

	constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
		this.dispatch = jest.fn()
		this.getState = jest.fn()
		this.actionCreator = actionCreator
	}

	async CallThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		const result = await action(this.dispatch, this.getState, undefined)
		return result
	}
}