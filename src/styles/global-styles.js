import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: franklin-gothic-urw, sans-serif;
    font-size: 18px;
    line-height: 1.6em;
  }
`

export default GlobalStyles
