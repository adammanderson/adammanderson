import {
  CoverWrapper,
  CoverInner,
} from './styles'

export default ({ children }) => (
  <CoverWrapper>
    <CoverInner>
      {children}
    </CoverInner>
  </CoverWrapper>
)
