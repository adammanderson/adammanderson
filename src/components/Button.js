import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  position: relative;
  padding: 0.4em 3em 0.3em 1em;
  line-height: 1.4em;
  font-size: 0.95em;
  font-weight: ${props => props.theme.fontWeightRegular};
  color: ${props => props.theme.buttonText};
  background: ${props => props.theme.buttonBackground};
  box-shadow: 0 2px 4px 0px rgba(0,0,0,0.1);
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  transition: all 300ms ease-in-out 0s;
  &:hover, &:focus {
    outline: none;
    text-decoration: none;
    color: ${props => props.theme.buttonText};
    background: darken(${props => props.theme.buttonBackground}, 10%);
    box-shadow: 0 4px 4px 0px rgba(0,0,0,0.1);
  }
  svg {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }
`

export default Button
