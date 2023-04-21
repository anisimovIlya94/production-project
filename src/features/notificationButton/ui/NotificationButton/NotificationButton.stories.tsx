import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import withMock from "storybook-addon-mock"
import { NotificationButton } from "./NotificationButton"

export default {
	title: "features/NotificationButton",
	component: NotificationButton,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	decorators: [withMock]
} as ComponentMeta<typeof NotificationButton>

const Template: ComponentStory<typeof NotificationButton> = (args) => (
	<div style={{ width: "100%" }}>
		<div style={{ marginLeft: "auto", width: "20px"}}>
			<NotificationButton {...args} />
		</div>
    
	</div>
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