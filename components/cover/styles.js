import styled from 'styled-components'
import media from '../styles/media'

export const CoverWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
`

export const CoverInner = styled.div`
  max-width: 580px;
  padding: 1.5em;
  ${media.tablet`
    padding: 3em;
  `};
`
