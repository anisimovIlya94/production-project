import { ComponentStory, ComponentMeta } from "@storybook/react"
import { UserRole } from "entities/User"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { AvatarDropdown } from "./AvatarDropdown"

export default {
	title: "features/AvatarDropdown",
	component: AvatarDropdown,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
	<div style={{margin: "150px"}}><AvatarDropdown {...args} /></div>
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
	user: {
		authData: {
			id: "1",
			username: "admin",
			roles: [
				UserRole.ADMIN
			],
			avatar: "https://cq.ru/storage/uploads/posts/961737/fr.jpg"
		}
	}
})]
