import { FC, Fragment, ReactNode } from "react"
import { classNames } from "../../../../lib/classNames/classNames"
import { Menu } from "@headlessui/react"
import cls from "./Dropdown.module.scss"
import { DropdownDirection } from "../../../../lib/types/ui"
import { AppLink } from "../../../AppLink/AppLink"
import { mapDropdownDirection } from "../../styles/consts"
import popupCls from "../../styles/popup.module.scss"

interface DropdownItem {
  content?: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown: FC<DropdownProps> = (props) => {
	const { className, items, trigger, direction = "bottom right" } = props

	return (
		<Menu as={"div"} className={classNames(cls.dropdown, {}, [className, popupCls.popup])}>
			<Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
			<Menu.Items
				className={classNames(cls.menu, {}, [mapDropdownDirection[direction]])}
			>
				{items.map((item, index) => {
					const content = ({ active }: { active: boolean }) => (
						<button
							disabled={item.disabled}
							type="button"
							onClick={item.onClick}
							className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled }, [
								className,
							])}
						>
							{item.content}
						</button>
					)
					if (item.href) {
						return (
							<Menu.Item
								key={index}
								as={AppLink}
								to={item.href}
								disabled={item.disabled}
							>
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
