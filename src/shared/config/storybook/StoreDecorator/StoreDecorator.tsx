import "app/styles/index.scss"
import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { loginReducer } from "features/AuthByUsername/model/slice/LoginSlice"
import { profileReducer } from "entities/Profile"
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice"
import { addCommentFormReducer } from "features/addCommentFrom/model/slice/addCommentFormSlice"
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice"

const initialReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncRedusers?: ReducersList ) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state} asyncRedusers={{...initialReducers, ...asyncRedusers}}>
			<StoryComponent/>
		</StoreProvider>
	)
}