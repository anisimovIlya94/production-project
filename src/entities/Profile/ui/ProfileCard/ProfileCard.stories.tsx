import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ProfileCard } from "./ProfileCard"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/themeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { Currency } from "entities/Currency"
import { Country } from "entities/Country"
import AvatarImage from "../../../../shared/assets/tests/storybookAvatar.jpeg"
import { ValidateProfileError } from "../../model/types/profile"

export default {
	title: "entities/ProfileCard",
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ProfileCard>
ProfileCard
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

const data = {
	id: "1",
	first: "Илья",
	lastname: "Анисимов",
	age: 28,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Ekb",
	username: "admin",
	avatar : AvatarImage
}

export const Primary = Template.bind({})
Primary.args = {data}

export const Dark = Template.bind({})
Dark.args = {data}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const IsLoading = Template.bind({})
IsLoading.args = { isLoading: true }

export const withError = Template.bind({})
withError.args = {error: ValidateProfileError.INCORRECT_CITY}