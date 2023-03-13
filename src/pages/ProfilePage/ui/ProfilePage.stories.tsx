import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import ProfilePage from "./ProfilePage"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/themeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { Currency } from "entities/Currency"
import { Country } from "entities/Country"

export default {
	title: "pages/ProfilePage",
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.args = {}

Light.decorators = [StoreDecorator({
	profile: {
		form: {
			first: "Илья",
			lastname: "Анисимов",
			age: 28,
			currency: Currency.RUB,
			country: Country.Russia,
			city: "Ekb",
			username: "admin",
			avatar : "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
		}
	}
})]

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
	profile: {
		form: {
			first: "Илья",
			lastname: "Анисимов",
			age: 28,
			currency: Currency.RUB,
			country: Country.Russia,
			city: "Ekb",
			username: "admin",
			avatar : "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
		}
	}
})]