import styled from 'styled-components'
import media from '../styles/media'
import { regularFont, boldFont, blackFont } from '../styles/fonts'

export const BigHeading = styled.h1`
  ${boldFont};
  color: ${props => props.theme.heading};
  font-size: 1.7em;
  line-height: 1.2em;
  margin: 0 0 1em 0;
  ${media.tablet`
    font-size: 2.4em;
  `};
`

export const MediumHeading = styled.h2`
  ${boldFont};
  margin: 0 0 0.6em 0;
  color: ${props => props.theme.heading};
  font-size: 1.2em;
`

export const HeavyHeading = styled.h3`
  position: relative;
  ${blackFont};
  margin: 0 0 0.6em 0;
  color: ${props => props.theme.heading};
  font-size: 1.3em;
  &:after {
    position: absolute;
    left: 0;
    bottom: -1px;
    content: '';
    border-bottom: 8px solid ${({ theme }) => theme.border};
    width: 3em;
    z-index: -1;
  }
`

export const SmallHeading = styled.h3`
  ${regularFont};
  color: ${props => props.theme.heading};
  font-size: 1.3em;
`
