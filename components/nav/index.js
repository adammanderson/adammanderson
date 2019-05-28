import Link from 'next/link'
import { NavWrapper, NavItem } from './styles'

export default () => (
  <NavWrapper>
    <Link href="/">
      <NavItem spacer>Hey</NavItem>
    </Link>
    <NavItem href="https://github.com/adammanderson">Github</NavItem>
    <NavItem href="https://www.linkedin.com/in/adammanderson">LinkedIn</NavItem>
  </NavWrapper>
)
