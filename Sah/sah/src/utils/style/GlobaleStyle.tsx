import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'

export const StyledGlobalStyle = createGlobalStyle<{isDarkMode:boolean}>`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#010010' : 'white')};
        margin: 0;  
    }

    .text, h1, h2, h3, p , li, a, .MuiTypography-root {
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
    }
`


const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
  }

export default GlobalStyle