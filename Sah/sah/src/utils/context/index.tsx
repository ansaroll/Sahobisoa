import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export const ThemeDarkLightProvider = ({ children }:Props) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

type Props = {
    children: React.ReactNode
}