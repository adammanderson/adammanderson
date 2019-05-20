import { createGlobalStyle } from 'styled-components'
import { bodyRegularFont } from './fonts'

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    margin: 0;
    padding:0;
  }

  body {
    ${bodyRegularFont};
    font-size: 17px;
    line-height: 1.5em;
    background: ${props => props.theme.background};
  }
`

export default GlobalStyles
