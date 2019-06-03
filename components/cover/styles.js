import styled from 'styled-components'
import posed from 'react-pose'
import media from '../styles/media'
import { fadeInUp } from '../styles/animations'
import { BigHeading, P } from '../typography'

export const CoverWrapper = styled.section`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
  ${media.tablet`
    min-height: 100vh;
  `};
`

export const CoverInner = styled(posed.div({
  enter: {
    staggerChildren: 2000,
  },
}))`
`

export const CoverHeading = styled(posed(BigHeading)(fadeInUp))`
  margin: 0;
`

export const CoverText = styled(P)`
  margin: 3em 0 0 0;
`
