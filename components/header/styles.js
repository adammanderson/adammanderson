import styled from 'styled-components'
import media from '../styles/media'
import { boldFont } from '../styles/fonts'

export const HeaderWrapper = styled.section`
  position: sticky;
  top: 0;
  flex: 0 0 300px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  min-height: 100vh;
`

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 1.5em;
  ${media.tablet`
    min-height: 60vh;
    padding: 0 2em;
  `};
`

export const Brand = styled.div`
  ${boldFont};
  color: ${({ theme }) => theme.heading};
  font-size: 1.1em;
`
