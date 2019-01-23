import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import walrus from '../../images/walrus.svg'

import {
  HeaderWrapper,
  Brand,
  Logo,
} from './styles'
import Nav from './Nav'

const Header = () => (
  <HeaderWrapper>
    <Brand>
      <Logo>
        <img src={walrus} alt="logo" />
      </Logo>
      Adam.
    </Brand>
    <Nav />
  </HeaderWrapper>
)

export default Header
