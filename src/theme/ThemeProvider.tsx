import { useState, FC, useMemo } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext"
import { ThemeContext } from "./ThemeContext"


export const ThemeProvider:FC = ({children}) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])
    
    

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}