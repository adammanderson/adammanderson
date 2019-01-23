import styled from 'styled-components'

export const HeaderWrapper = styled.section`
  display: flex;
  position: fixed;
  width: 50vw;
  padding: 2em 1em 1em 2em;
  z-index: 10;
`

export const Brand = styled.div`
  position: relative;
  flex: 1;
  padding: 0.25em 0 0.2em 60px;
  color: ${props => props.theme.heading};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: 1.4em;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  img {
    width: 100%;
  }
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

export const Drawer = styled.div`
`
