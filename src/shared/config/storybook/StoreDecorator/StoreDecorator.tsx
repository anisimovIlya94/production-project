import "app/styles/index.scss"
import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { loginReducer } from "features/AuthByUsername/model/slice/LoginSlice"
import { profileReducer } from "entities/Profile/model/slice/profileSlice"
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

const initialReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncRedusers?: ReducersList ) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state} asyncRedusers={{...initialReducers, ...asyncRedusers}}>
			<StoryComponent/>
		</StoreProvider>
	)
}