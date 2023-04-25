import { ComponentStory, ComponentMeta } from "@storybook/react"
import { RatingCard } from "./RatingCard"

export default {
	title: "entities/RatingCard",
	component: RatingCard,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => (
	<RatingCard {...args} />
)

export const NonSelectWithHasFeedback = Template.bind({})
NonSelectWithHasFeedback.args = {
	title: "Оцените статью",
	feedbackTitle: "Оставьте свой отзыв о статье",
	hasFeedback: true
}

export const NonSelectWithoutHasFeedback = Template.bind({})
NonSelectWithoutHasFeedback.args = {
	title: "Оцените статью",
	hasFeedback: false
}

export const Selected = Template.bind({})
Selected.args = {
	rate: 5
}
