import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { EditableProfileCardHeader } from "./EditableProfileCardHeader"

export default {
	title: "features/EditableProfileCardHeader",
	component: EditableProfileCardHeader,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof EditableProfileCardHeader>

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
	<EditableProfileCardHeader {...args} />
)

export const Edit = Template.bind({})
Edit.args = {}
Edit.decorators = [StoreDecorator({
	profile: {}
})]

export const ReadOnly = Template.bind({})
ReadOnly.args = {}
ReadOnly.decorators = [StoreDecorator({
	profile: {
		readonly: true
	}
})]
