import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Text, TextSize, TextTheme } from "./Text"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/themeProvider"

export default {
	title: "shared/Text",
	component: Text,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const TitleText = Template.bind({})
TitleText.args = {
	title: "title title",
	text: "text text text"
}

export const TitleTextDark = Template.bind({})
TitleTextDark.args = {
	title: "title title",
	text: "text text text"
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
	title: "title title"
}

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
	title: "title title",
}

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyText = Template.bind({})
OnlyText.args = {
	text: "text text text"
}

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
	text: "text text text"
}

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)] 


export const TextError = Template.bind({})
TextError.args = {
	text: "text text text",
	theme: TextTheme.ERROR
}

export const TextErrorDark = Template.bind({})
TextErrorDark.args = {
	text: "text text text",
	theme: TextTheme.ERROR
}

TextErrorDark.decorators = [ThemeDecorator(Theme.DARK)] 

export const SizeL = Template.bind({})
SizeL.args = {
	title: "title title",
	text: "text text text",
	size: TextSize.L
}

export const SizeM = Template.bind({})
SizeM.args = {
	title: "title title",
	text: "text text text",
	size: TextSize.M
}

export const SizeS = Template.bind({})
SizeS.args = {
	title: "title title",
	text: "text text text",
	size: TextSize.S
}
