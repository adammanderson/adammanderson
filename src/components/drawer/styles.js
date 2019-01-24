import styled from 'styled-components'
import posed from 'react-pose'
import media from '../../styles/media'

const drawerAnimation = {
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 500,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 500,
      ease: 'easeInOut',
    },
  },
}

export const DrawerWrapper = styled(posed.div(drawerAnimation))`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 4em 2em 2em 2em;
  background: ${props => props.theme.background}
  z-index: 11;
  ${media.tablet`
    width: 400px;
  `}
`

export const DrawerInner = styled.div`
`

export const DrawerClose = styled.button`
  position: absolute;
  top: 2em;
  left: 2em;
  background: none;
  border: none;
`
