import { FC, ReactNode } from "react"
import { Popover as HPopover } from "@headlessui/react"
import { classNames } from "../../../../lib/classNames/classNames"
import cls from "./Popover.module.scss"
import popupCls from "../../styles/popup.module.scss"
import { DropdownDirection } from "../../../../lib/types/ui"
import { mapDropdownDirection } from "../../styles/consts"

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover: FC<PopoverProps> = (props) => {
	const { className, trigger, direction = "bottom right", children } = props

	return (
		<HPopover className={classNames(cls.popover, {}, [className, popupCls.popup])}>
			<HPopover.Button className={popupCls.trigger}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel className={classNames(cls.panel, {}, [className, mapDropdownDirection[direction]])}>
				{children}
			</HPopover.Panel>
		</HPopover>
	)
}
