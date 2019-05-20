import styled from 'styled-components'
import { headingBoldFont } from '../styles/fonts'

export const H1 = styled.h1`
  ${headingBoldFont};
  color: ${props => props.theme.heading};
  font-size: 1.5em;
  line-height: 0.9em;
  margin-bottom: 0.3em;
`

export const H3 = styled.h1`
  ${headingBoldFont};
  color: ${props => props.theme.heading};
  font-size: 1.3em;
`
