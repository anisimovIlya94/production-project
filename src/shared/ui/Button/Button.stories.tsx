import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button, ButtonSize, ButtonTheme } from "./Button"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"
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

export const Background = Template.bind({})
Background.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND
}

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND
}

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background_Inverted = Template.bind({})

Background_Inverted.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Background_InvertedDark = Template.bind({})
Background_InvertedDark.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND_INVERTED
}
Background_InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Square = Template.bind({})
Square.args = {
	children: ">",
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.M
}

export const SquareL = Template.bind({})
SquareL.args = {
	children: ">",
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L
}

export const SquareXL = Template.bind({})
SquareXL.args = {
	children: ">",
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL
}

export const Size = Template.bind({})
Size.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND
}

export const SizeL = Template.bind({})
SizeL.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND,
	size: ButtonSize.L
}

export const SizeXL = Template.bind({})
SizeXL.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND,
	size: ButtonSize.XL
}

export const Disabled = Template.bind({})
Disabled.args = {
	children: "test",
	theme: ButtonTheme.BACKGROUND,
	disabled: true
}
