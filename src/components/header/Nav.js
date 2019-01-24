import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import { User, Wind, Terminal, Menu } from 'react-feather'

import Drawer from '../drawer'
import {
  NavWrapper,
  NavIcon,
  MenuButton,
} from './styles'

const NavLinks = () => (
  <Fragment>
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
  </Fragment>
)

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: true,
      isOpen: false,
    }
  }

  handleDrawerToggle = () => {
    console.log('close drawer')
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  render() {
    const { isMobile, isOpen } = this.state

    return (
      <NavWrapper>
        { isMobile ? (
          <Drawer
            isOpen={isOpen}
            handleDrawerClose={this.handleDrawerToggle}
          >
            <NavLinks />
          </Drawer>
        ) : (
          <NavLinks />
        )}
        <MenuButton onClick={this.handleDrawerToggle}><Menu size={26} /></MenuButton>
      </NavWrapper>
    )
  }
}
