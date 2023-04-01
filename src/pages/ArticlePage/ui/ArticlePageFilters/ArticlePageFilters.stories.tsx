import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ArticleView } from "entities/Article"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ArticlePageFilters } from "./ArticlePageFilters"

export default {
	title: "pages/ArticlePageFilters",
	component: ArticlePageFilters,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ArticlePageFilters>

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => (
	<ArticlePageFilters {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
	view : ArticleView.BIG
}

Normal.decorators = [StoreDecorator({})]
