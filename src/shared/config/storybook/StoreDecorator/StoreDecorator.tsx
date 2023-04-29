import "@/app/styles/index.scss"
import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { loginReducer } from "@/features/AuthByUsername/testing"
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { articleDetailsReducer } from "@/entities/Article/testing"
import { addCommentFormReducer } from "@/features/addCommentFrom/testing"
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing"
import { profileReducer } from "@/features/editableProfileCard/testing"

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