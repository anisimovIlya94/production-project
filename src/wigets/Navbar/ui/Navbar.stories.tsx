import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Navbar } from "./Navbar"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/themeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
export default {
	title: "widgets/Navbar",
	component: Navbar,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({

})]

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})]

export const Auth = Template.bind({})
Auth.args = {}

Auth.decorators = [StoreDecorator({
	user: { authData: {} }
})]