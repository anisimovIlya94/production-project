import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Avatar } from "./Avatar"
import storybookAvatar from "./storybookAvatar.jpeg"

export default {
	title: "shared/Avatar",
	component: Avatar,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
	src: storybookAvatar,
	size: 150
}

export const Small = Template.bind({})
Small.args = {
	src: storybookAvatar,
	size: 50
}