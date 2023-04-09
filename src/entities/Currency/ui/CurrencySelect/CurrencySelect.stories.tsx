import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CurrencySelect } from "./CurrencySelect"

export default {
	title: "entities/CurrencySelect",
	component: CurrencySelect,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <div style={{marginTop: "150px"}}><CurrencySelect {...args}/></div>

export const Primary = Template.bind({})
Primary.args = {}
