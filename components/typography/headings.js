import styled from 'styled-components'
import { regularFont, boldFont } from '../styles/fonts'

export const BigHeading = styled.h1`
  ${boldFont};
  color: ${props => props.theme.heading};
  font-size: 2.4em;
  line-height: 1.2em;
  margin-bottom: 0.6em;
`

export const MediumHeading = styled.h2`
  ${boldFont};
  color: ${props => props.theme.heading};
  font-size: 1.8em;
`

export const SmallHeading = styled.h3`
  ${regularFont};
  color: ${props => props.theme.heading};
  font-size: 1.3em;
`
