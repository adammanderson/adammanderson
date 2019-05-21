import { createGlobalStyle } from 'styled-components'
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
    padding: 0 2em;
    ${regularFont};
    font-size: 17px;
    line-height: 1.5em;
    background: ${props => props.theme.backgroundDark};
  }
`

export default GlobalStyles
