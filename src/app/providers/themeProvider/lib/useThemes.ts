import { LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import { useContext } from "react";
import {
  Theme,
  ThemeContext,
} from "./ThemeContext";

interface UseThemesResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemes = (): UseThemesResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
