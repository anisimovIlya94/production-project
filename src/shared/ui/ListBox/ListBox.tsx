import { FC, Fragment, ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Listbox as HListBox } from "@headlessui/react"
import cls from "./ListBox.module.scss"
import { Button } from "../Button/Button"
import { HStack } from "../Stack/HStack/HStack"
import { DropdownDirection } from "shared/lib/types/ui"

interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string;
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  items?: ListBoxItem[]
  readonly?: boolean
  label?: string
  direction?: DropdownDirection
}

export const ListBox: FC<ListBoxProps> = (props) => {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readonly,
		label,
		direction = "bottom right"
	} = props

	const mapDropdownDirection: Record<DropdownDirection, string> = {
		"top left": cls.dropdownTopLeft,
		"top right": cls.dropdownTopRight,
		"bottom left": cls.dropdownBottomLeft,
		"bottom right": cls.dropdownBottomRight
	}

	return (
		<HStack gap="8">
			{label && <span>{label}</span>}
			<HListBox disabled={readonly} as={"div"} className={classNames(cls.listBox, {}, [className])} value={value} onChange={onChange}>
				<HListBox.Button disabled={readonly}>
					<Button disabled={readonly}>
						{value ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options className={classNames(cls.options, {}, [mapDropdownDirection[direction]])}>
					{items?.map((item) => (
						<HListBox.Option
							key={item.value}
							value={item.value}
							as={Fragment}
							disabled={item.disabled}
						>
							{({ active, selected }) => (
								<li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: readonly }, [className])}>
									{ selected && "!" }
									{ item.content }
								</li>
							)}
						</HListBox.Option>
					))}
				</HListBox.Options>
			</HListBox>
		</HStack>
	)
}