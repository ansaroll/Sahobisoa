import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'

export const StyledGlobalStyle = createGlobalStyle<{isDarkMode:boolean}>`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        /* Ici cette syntaxe revient au même que
        background-color: ${props =>
        props.isDarkMode ? '#2F2E41' : 'white'};
        */
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    }

    .text, h1, h2, h3, p , li, a, span, button, input, textarea, select, option, label, div, td, th, tr, table, tbody, thead, tfoot, ul, ol, dl, dt, dd, form, fieldset, legend, blockquote, q, cite, pre, code, samp, kbd, var, hr, ins, del, img, object, iframe, embed, video, audio, canvas, caption, figure, figcaption, address, menu, details, summary, article, aside, footer, header, hgroup, nav, section, time, mark, output, progress, meter, details, summary, menuitem, command, keygen, bdi, bdo, ruby, rt, rp, wbr, big, small, sub, sup, fieldset, label, legend, button, input, textarea, select, optgroup, option, datalist, keygen, output, progress, meter, details, summary, menuitem, command, canvas, video, audio, track, source, img, embed, object, param, map, area, a, abbr, acronym, b, bdo, big, cite, code, dfn, em, i, kbd, q, samp, small, span, strong, sub, sup, tt, var, bdi, bdo, ruby, rt, rp, wbr, ins, del, caption, col, colgroup, table, tbody, tfoot, thead, tr, td, th, address, article, aside, footer, header, hgroup, nav, section, blockquote, dd, div, dl, dt, figcaption, figure, hr, li, main, ol, p, pre, ul, a, abbr, acronym, b, bdo, big, cite, code, dfn, em, i, kbd, q, samp, small, span, strong, sub, sup, tt, var, bdi, bdo, ruby, rt, rp, wbr, ins, del, caption, col, colgroup, table, tbody, tfoot, thead, tr, td, th, address, article, aside, footer, header, hgroup, nav, section, blockquote, dd, div, dl, dt, figcaption, figure, hr, li, main, ol, p, pre, ul, button{
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
    }
`


const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
  }

export default GlobalStyle