import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Currency } from "entities/Currency"
import { ListBox } from "./ListBox"
import { action } from "@storybook/addon-actions"

export default {
	title: "shared/ListBox",
	component: ListBox,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => (
	<ListBox {...args} />
)

const Template2: ComponentStory<typeof ListBox> = (args) => (
	<div style={{marginTop: "150px"}}>
		<ListBox {...args} />
	</div>
  
)

export const Bottom = Template.bind({})
Bottom.args = {
	items:[
		{ content: Currency.EUR, value: Currency.EUR },
		{ content: Currency.RUB, value: Currency.RUB },
		{ content: Currency.USD, value: Currency.USD }
	],
	value:"RUB",
	defaultValue:"Выберете валюту",
	label: "Ваша валюта",
	onChange: action("onChange")
}

export const Top = Template2.bind({})
Top.args = {
	onChange: action("onChange"),
	items:[
		{ content: Currency.EUR, value: Currency.EUR },
		{ content: Currency.RUB, value: Currency.RUB },
		{ content: Currency.USD, value: Currency.USD }
	],
	value:"RUB",
	defaultValue:"Выберете валюту",
	label: "Ваша валюта:",
	direction: "top"
}
