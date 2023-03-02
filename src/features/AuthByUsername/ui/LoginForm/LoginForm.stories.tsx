import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import LoginForm from "./LoginForm"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

export default {
	title: "features/LoginForm",
	component: LoginForm,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
	login: {username: "admin", password: "123"}
})]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [StoreDecorator({
	login: {username: "admin", password: "123", error: "Неверно введены логин или пароль"}
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
	login: {username: "admin", password: "123", isLoading: true}
})]
