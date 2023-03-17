import { LOCAL_STORAGE_THEME_KEY } from "./ThemeContext"
import { useContext } from "react"
import {
	Theme,
	ThemeContext,
} from "./ThemeContext"

interface UseThemesResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemes = (): UseThemesResult => {
	const {
		theme,
		setTheme
	} = useContext(ThemeContext)

	const toggleTheme = () => {
		let newTheme: Theme
		switch (theme) {
		case Theme.LIGHT:
			newTheme = Theme.DARK
			break
		case Theme.DARK: 
			newTheme = Theme.ORANGE
			break
		case Theme.ORANGE: 
			newTheme = Theme.LIGHT
			break
		default: newTheme = Theme.LIGHT
		}
		setTheme?.(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		
	}

	return { theme: theme || Theme.LIGHT, toggleTheme }
}
