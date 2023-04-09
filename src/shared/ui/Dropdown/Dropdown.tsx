import { FC, Fragment, ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Menu } from "@headlessui/react"
import cls from "./Dropdown.module.scss"
import { DropdownDirection } from "shared/lib/types/ui"
import { AppLink } from "../AppLink/AppLink"

interface DropdownItem {
  content?: ReactNode
  href?: string
  disabled?: boolean
  onClick?: () => void
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = (props) => {
	const {
		className,
		items,
		trigger,
		direction = "bottom right"
	} = props

	const mapDropdownDirection: Record<DropdownDirection, string> = {
		"top left": cls.dropdownTopLeft,
		"top right": cls.dropdownTopRight,
		"bottom left": cls.dropdownBottomLeft,
		"bottom right": cls.dropdownBottomRight
	}

	return (
		<Menu as={"div"} className={classNames(cls.dropdown, {}, [className])}>
			<Menu.Button className={cls.button}>{trigger}</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, [mapDropdownDirection[direction]])}>
				{items.map((item, index) => {
					const content = ({ active }: { active: boolean }) => (
						<button
							disabled={item.disabled}
							type="button"
							onClick={item.onClick}
							className={classNames(cls.item, { [cls.active]: active }, [className])}
						>
							{item.content}
						</button>
					)
					if (item.href) {
						return (
							<Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
								{content}
							</Menu.Item>
						)
					}
					return (
						<Menu.Item key={index} as={Fragment} disabled={item.disabled}>
							{content}
						</Menu.Item>
					)
				})}
			</Menu.Items>
		</Menu>
	)
}