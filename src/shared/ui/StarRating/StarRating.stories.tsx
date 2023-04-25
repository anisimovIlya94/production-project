import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StarRating } from "./StarRating"

export default {
	title: "shared/StarRating",
	component: StarRating,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => (
	<StarRating {...args} />
)

export const NonSelect = Template.bind({})
NonSelect.args = {}

export const Selected = Template.bind({})
Selected.args = {
	selectedStars: 4
}