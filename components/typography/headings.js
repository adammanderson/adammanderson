import styled from 'styled-components'
import media from '../styles/media'
import { regularFont, boldFont } from '../styles/fonts'

export const BigHeading = styled.h1`
  ${boldFont};
  color: ${props => props.theme.heading};
  font-size: 1.7em;
  line-height: 1.2em;
  margin-bottom: 1em;
  ${media.tablet`
    font-size: 2.4em;
  `};
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
