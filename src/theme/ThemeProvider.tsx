import { FC, useMemo, useState } from "react";
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY, ThemeContextProps } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps = useMemo<ThemeContextProps>(() => ({
		theme,
		setTheme 
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{ children }
		</ThemeContext.Provider>
	)
}

export default ThemeProvider