import { createGlobalStyle } from 'styled-components'
import media from './media'
import { regularFont } from './fonts'

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding:0;
  }

  body {
    ${regularFont};
    font-size: 16px;
    line-height: 1.4em;
    background: ${props => props.theme.background};
  }
`

export default GlobalStyles
