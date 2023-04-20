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

export const Normal = Template.bind({})
Normal.args = {
	items:[
		{ content: "123j12h3kj1h23", value: Currency.EUR },
		{ content: "123j12h3kj1h23", value: Currency.RUB },
		{ content: "123j12h3kj1h23", value: Currency.USD }
	],
	value:"RUB",
	defaultValue:"Выберете валюту",
	label: "Ваша валюта",
	onChange: action("onChange")
}

export const TopLeft = Template2.bind({})
TopLeft.args = {
	onChange: action("onChange"),
	items:[
		{ content: "123j12h3kj1h23", value: Currency.EUR },
		{ content: "123j12h3kj1h23", value: Currency.RUB },
		{ content: "123j12h3kj1h23", value: Currency.USD }
	],
	value:"RUB",
	defaultValue:"Выберете валюту",
	label: "Ваша валюта:",
	direction: "top left"
}

export const TopRight = Template2.bind({})
TopRight.args = {
	onChange: action("onChange"),
	items:[
		{ content: "123j12h3kj1h23", value: Currency.EUR },
		{ content: "123j12h3kj1h23", value: Currency.RUB },
		{ content: "123j12h3kj1h23", value: Currency.USD }
	],
	value:"RUB",
	defaultValue:"Выберете валюту",
	label: "Ваша валюта:",
	direction: "top right"
}

export const BottomLeft = Template2.bind({})
BottomLeft.args = {
	onChange: action("onChange"),
	items:[
		{ content: "123j12h3kj1h23", value: Currency.EUR },
		{ content: "123j12h3kj1h23", value: Currency.RUB },
		{ content: "123j12h3kj1h23", value: Currency.USD }
	],
	value:"RUB",
	defaultValue:"Выберете валюту",
	label: "Ваша валюта:",
	direction: "bottom left"
}

export const BottomRight = Template2.bind({})
BottomRight.args = {
	onChange: action("onChange"),
	items:[
		{ content: "123j12h3kj1h23", value: Currency.EUR },
		{ content: "123j12h3kj1h23", value: Currency.RUB },
		{ content: "123j12h3kj1h23", value: Currency.USD }
	],
	value:"RUB",
	defaultValue:"Выберете валюту",
	label: "Ваша валюта:",
	direction: "bottom right"
}
