import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "../Button/Button"
import { Dropdown } from "./Dropdown"

export default {
	title: "shared/Dropdown",
	component: Dropdown,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
	<div style={{margin: "100px"}}><Dropdown {...args} /></div>
)

export const Normal = Template.bind({})
Normal.args = {
	trigger: <Button>open</Button>,
	items: [
		{
			content: "first first"
		},
		{
			content: "second second"
		},
		{
			content: "third third"
		},
	]
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
	direction: "bottom left",
	trigger: <Button>open</Button>,
	items: [
		{
			content: "first first"
		},
		{
			content: "second second"
		},
		{
			content: "third third"
		},
	]
}

export const TopLeft = Template.bind({})
TopLeft.args = {
	direction: "top left",
	trigger: <Button>open</Button>,
	items: [
		{
			content: "first first"
		},
		{
			content: "second second"
		},
		{
			content: "third third"
		},
	]
}

export const TopRight = Template.bind({})
TopRight.args = {
	direction: "top right",
	trigger: <Button>open</Button>,
	items: [
		{
			content: "first first"
		},
		{
			content: "second second"
		},
		{
			content: "third third"
		},
	]
}
