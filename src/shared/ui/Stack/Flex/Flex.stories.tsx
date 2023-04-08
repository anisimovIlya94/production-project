import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Flex } from "./Flex"

export default {
	title: "shared/Flex",
	component: Flex,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	)
}

export const RowBetween = Template.bind({})
RowBetween.args = {
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	),
	justify: "between"
}

export const RowGap4 = Template.bind({})
RowGap4.args = {
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	),
	gap: "4"
}

export const RowGap8 = Template.bind({})
RowGap8.args = {
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	),
	gap: "8"
}

export const RowGap16 = Template.bind({})
RowGap16.args = {
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	),
	gap: "16"
}

export const RowGap32 = Template.bind({})
RowGap32.args = {
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	),
	gap: "32"
}

export const Column = Template.bind({})
Column.args = {
	direction: "column",
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	)
}

export const ColumnGap16 = Template.bind({})
ColumnGap16.args = {
	direction: "column",
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	),
	gap: "16"
}

export const ColumnAlignEnd = Template.bind({})
ColumnAlignEnd.args = {
	direction: "column",
	children: (
		<>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
			<div>first</div>
		</>
	),
	align: "end"
}
