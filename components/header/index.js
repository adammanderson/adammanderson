import {
  HeaderWrapper,
  HeaderInner,
  Brand,
} from './styles'
import Nav from '../nav'

export default () => (
  <HeaderWrapper>
    <HeaderInner>
      <Brand>Adam Anderson</Brand>
      <Nav />
    </HeaderInner>
  </HeaderWrapper>
)
