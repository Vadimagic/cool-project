import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"


interface useThemeResult {
	theme: Theme;
	toggleTheme: (theme?: Theme) => void;
}

export const useTheme = (): useThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = (val?: Theme) => {
		if (val) {
			return setTheme(val)
		}
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		toggleTheme
	}
}