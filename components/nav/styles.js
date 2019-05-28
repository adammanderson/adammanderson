import styled from 'styled-components'

export const NavWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  margin: 1em 0;
`

export const NavItem = styled.a`
  position: relative;
  padding: 0.2em 0;
  color: ${({ theme }) => theme.body};
  font-size: 0.9em;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease-in-out 0s;
  ${({ spacer }) => spacer && `
    flex: 1;
  `}
  &:before {
    content: '';
    position:absolute;
    top: 1em;
    width: 2em;
    border-bottom: 1px solid ${({ theme }) => theme.body};
    transform: translateX(-180%);
    transition: all 300ms ease-in-out 0s;
  }
  &:hover {
    color: ${({ theme }) => theme.heading};
    &:before {
      border-color: ${({ theme }) => theme.heading};
      transform: translateX(-140%);
    }
  }
`
