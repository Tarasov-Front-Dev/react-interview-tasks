import { createContext, FunctionComponent, ReactNode, useContext, useState } from 'react'

enum THEME {
    LIGHT = 'light',
    DARK = 'dark'
}

type ThemeContextProps = {
    theme: THEME
    toggleTheme: () => void
}

type ThemeContextProviderProps = {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const useThemeContex = () => useContext(ThemeContext)

export const ThemeContextProvider: FunctionComponent<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

    const toggleTheme = () => {
        setTheme(prev => prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
