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

const Header = () => {
  return (
    <HeaderWrapper>
      <Brand>
        <Logo>
          <Walrus />
        </Logo>
        adam.
      </Brand>
      <Nav />
    </HeaderWrapper>
  )
}

export default Header
