import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Modal } from "./Modal"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"
export default {
	title: "shared/Modal",
	component: Modal,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
	children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt mollitia amet ea ducimus odio velit quod accusantium, omnis ab neque!",
	isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
	children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt mollitia amet ea ducimus odio velit quod accusantium, omnis ab neque!",
	isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]