import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { EditableProfileCard } from "./EditableProfileCard"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

export default {
	title: "features/EditableProfileCard",
	component: EditableProfileCard,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />

export const Edit = Template.bind({})
Edit.args = { id: "1" }
Edit.decorators = [StoreDecorator({
	profile: {
        
	}
})]

export const ReadOnly = Template.bind({})
ReadOnly.args = { id: "1" }
ReadOnly.decorators = [StoreDecorator({
	profile: {
		readonly: true
	}
})]