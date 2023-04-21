import { classNames } from "@/shared/lib/classNames/classNames"
import DarkIcon from "../../assets/icons/theme-dark.svg"
import LightIcon from "../../assets/icons/theme-light.svg"

import { memo, PropsWithChildren } from "react"
import { Theme, useThemes } from "@/app/providers/themeProvider"
import { Button, ButtonTheme } from "../Button/Button"

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: PropsWithChildren<ThemeSwitcherProps>) => {
	const { className } = props
	const { theme, toggleTheme } = useThemes()

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggleTheme}
			className={classNames("", {}, [className])}>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
})
