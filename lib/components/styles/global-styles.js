import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${props => props.theme.sansSerif};
    font-size: 18px;
    line-height: 1.4em;
    background: ${props => props.theme.background};
    overflow-x: hidden;
  }
`

export default GlobalStyles
