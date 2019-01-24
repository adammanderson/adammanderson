import styled from 'styled-components'
import media from '../../styles/media'

export const HeaderWrapper = styled.section`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 1em;
  z-index: 10;
  background: ${props => props.theme.background}
  ${media.desktop`
    width: 50vw;
    padding: 2em 1em 2em 2em;
  `}
`

export const Brand = styled.div`
  position: relative;
  flex: 1;
  padding: 0.15em 0 0.2em 50px;
  color: ${props => props.theme.heading};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: 1.4em;
  font-family: ${props => props.theme.serif};
  ${media.desktop`
    font-size: 1.6em;
    padding: 0.25em 0 0.2em 60px;
  `}
`

export const Logo = styled.div`
  position: absolute;
  top: -8px;
  left: 0;
  width: 40px;
  img {
    width: 100%;
  }
  ${media.desktop`
    top: 0;
    font-size: 1.6em;
  `}
`

export const NavWrapper = styled.div`
  flex: 0 1 auto;
  a {
    display: inline-block;
    padding: 0.2em 0.7em;
    font-weight: ${props => props.theme.fontWeightBold};
    color: ${props => props.theme.heading};
    transition: all 300ms ease-in-out 0s;
    &:hover, &:focus {
      outline: none;
      text-decoration: none;
      color: ${props => props.theme.buttonBackground};
    }
  }
`

export const NavIcon = styled.span`
  display: inline-block;
  position: relative;
  top: -1px;
  margin-right: 0.2em;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 2px;
`

export const MenuButton = styled.button`
  padding: 0;
  background: none;
  border:none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
