import styled from 'styled-components'
import { boldItalicFont } from '../styles/fonts'

export const Highlight = styled.span`
  ${boldItalicFont};
  color: ${({ theme }) => theme.hightlight};
  background: #ff9966;
  background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);
  background: linear-gradient(to right, #ff5e62, #ff9966);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
