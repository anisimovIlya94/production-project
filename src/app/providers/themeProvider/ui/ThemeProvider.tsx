import { useState, useMemo, ReactNode, useEffect } from "react"
import {
	ThemeContext,
} from "@/shared/lib/context/ThemeContext/ThemeContext"
import { Theme } from "@/shared/const/theme"
import { useJsonSettings } from "@/entities/User"

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { children, initialTheme } = props

	const {theme: defaultTheme} = useJsonSettings()

	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT)
	const [isThemeInited, setIsThemeInited] = useState(false)

	useEffect(() => {
		if (!isThemeInited && defaultTheme) {
			setTheme(defaultTheme)
			setIsThemeInited(true)
		}
	},[defaultTheme, isThemeInited])

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])
	document.body.className = theme

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
