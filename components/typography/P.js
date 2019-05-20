import styled from 'styled-components'
import { bodyRegularFont } from '../styles/fonts'
import media from '../styles/media'

export const P = styled.p`
  ${bodyRegularFont};
  color: ${props => props.theme.body};
  letter-spacing: 0.05em;
`
