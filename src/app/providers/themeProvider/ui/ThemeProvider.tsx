import { useState, useMemo, ReactNode } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext"

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
	const {
		children,
		initialTheme
	} = props
	const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])
	document.body.className = theme

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
