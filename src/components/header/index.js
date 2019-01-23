import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Walrus from './Walrus'

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
        <Walrus />
      </Logo>
      Adam.
    </Brand>
    <Nav />
  </HeaderWrapper>
)

export default Header
