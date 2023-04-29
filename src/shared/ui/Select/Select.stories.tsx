import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Select } from "./Select"

export default {
	title: "shared/Select",
	component: Select,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const TitleText = Template.bind({})
TitleText.args = {
	label: "Label:",
	options: [
		{ value: "123", content: "Первый пункт" },
		{ value: "1234", content: "Второй пункт" },
	]
}

