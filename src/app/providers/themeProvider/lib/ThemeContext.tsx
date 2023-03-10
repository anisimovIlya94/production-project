import { createContext } from "react"

export enum Theme {
    "LIGHT" = "app_light",
    "DARK" = "app_dark",
    "ORANGE" = "app_orange"
}

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const LOCAL_STORAGE_THEME_KEY = "theme"

export const ThemeContext = createContext<ThemeContextProps>({})