import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

import type { PropsWithChildren } from "react"



interface NavbarProps {
  className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
	const { className } = props

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				/
			</div>
		</div>
	)
}
