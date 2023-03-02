import "app/styles/index.scss"
import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { loginReducer } from "features/AuthByUsername/model/slice/LoginSlice"

const initialReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	login: loginReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>> ) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state} asyncRedusers={{...initialReducers, ...asyncRedusers}}>
			<StoryComponent/>
		</StoreProvider>
	)
}