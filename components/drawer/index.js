import React from 'react'
import PropTypes from 'prop-types'
import { PoseGroup } from 'react-pose'

import {
  DrawerWrapper,
  DrawerInner,
  DrawerClose,
} from './styles'

const Drawer = ({ children, isOpen, handleDrawerClose }) => (
  <PoseGroup>
    { isOpen && (
      <DrawerWrapper key="drawer">
        <DrawerClose onClick={handleDrawerClose}>Close</DrawerClose>
        <DrawerInner>
          {children}
        </DrawerInner>
      </DrawerWrapper>
    )}
  </PoseGroup>
)

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
}

export default Drawer
