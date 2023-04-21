import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import withMock from "storybook-addon-mock"
import { NotificationsList } from "./NotificationsList"

export default {
	title: "entities/Notification/NotificationsList",
	component: NotificationsList,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	decorators: [withMock]
} as ComponentMeta<typeof NotificationsList>

const Template: ComponentStory<typeof NotificationsList> = (args) => (
	<NotificationsList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: "GET",
			status: 200,
			response: [
				{
					"id": "1",
					"title": "Уведомление 1",
					"description": "Произошло какое-то событие",
					"userId": "1"
				},
				{
					"id": "2",
					"title": "Уведомление 2",
					"description": "Произошло какое-то событие",
					"userId": "1",
					"href": "http://localhost:3000/admin"
				},
			],
		},
	],
}
