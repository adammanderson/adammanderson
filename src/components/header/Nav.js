import React, { Component } from 'react'
import { Link } from 'gatsby'
import { User, Wind, Terminal } from 'react-feather'

import {
  NavWrapper,
  Drawer,
  DrawerToggler,
  NavIcon,
} from './styles'

const Nav = () => (
  <NavWrapper>
    <Link to="/profile">
      <NavIcon>
        <User size={20} />
      </NavIcon>
      Profile
    </Link>
    <Link to="/codes">
      <NavIcon>
        <Terminal size={20} />
      </NavIcon>
      Codes
    </Link>
    <Link to="/thoughts">
      <NavIcon>
        <Wind size={20} />
      </NavIcon>
      Thoughts
    </Link>
  </NavWrapper>
)

export default Nav
