import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button, ButtonTheme } from "./Button"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/themeProvider"
export default {
	title: "Example/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: "test",
}

export const Clear = Template.bind({})
Clear.args = {
	children: "test",
	theme: ButtonTheme.CLEAR
}

export const ClearDark = Template.bind({})
ClearDark.args = {
	children: "test",
	theme: ButtonTheme.CLEAR
}

ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
	children: "test",
	theme: ButtonTheme.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: "test",
	theme: ButtonTheme.OUTLINE
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
