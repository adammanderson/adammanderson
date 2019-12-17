import { createGlobalStyle } from 'styled-components';

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
    font-size: 16px;
    line-height: 1.4em;
    ${({ theme }): string => `
      background-color: ${theme.background.default};
      color: ${theme.text.default};
      font-family: ${theme.typography.fonts.body};  
    `};
    transition: all 300ms ease-in-out 0s;
  }
`;

export default GlobalStyles;
