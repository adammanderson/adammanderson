import styled from 'styled-components'
import media from '../styles/media'

export const CoverWrapper = styled.section`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
  ${media.tablet`
    min-height: 100vh;
  `};
`

export const CoverInner = styled.div`
`
