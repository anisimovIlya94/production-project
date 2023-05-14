import { classNames } from "@/shared/lib/classNames/classNames"
import DarkIcon from "../../assets/icons/theme-dark.svg"
import LightIcon from "../../assets/icons/theme-light.svg"

import { memo, PropsWithChildren, useCallback } from "react"
import { Button, ButtonTheme } from "../Button/Button"
import { useThemes } from "@/shared/lib/hooks/useThemes/useThemes"
import { Theme } from "@/shared/const/theme"
//eslint-disable-next-line
import { saveJsonSettings } from "@/entities/User"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: PropsWithChildren<ThemeSwitcherProps>) => {
	const { className } = props
	const { theme, toggleTheme } = useThemes()
	const dispatch = useAppDispatch()

	const toggleHandler = useCallback(() => {
		toggleTheme((newTheme: Theme) => {
			dispatch(saveJsonSettings({theme: newTheme}))
		})
	},[toggleTheme, dispatch])

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggleHandler}
			className={classNames("", {}, [className])}>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
})
