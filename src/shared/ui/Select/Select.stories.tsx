import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Select } from "./Select"
import { Currency } from "@/entities/Currency"

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
		{ content: Currency.EUR, value: Currency.EUR },
		{ content: Currency.RUB, value: Currency.RUB },
		{ content: Currency.USD, value: Currency.USD },
	]
}

