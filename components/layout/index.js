import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundLight};
  &:after {
    content: '';
    position: fixed;
    bottom: 0;
    left: 0;
    height: 2em;
    width: 100vw;
    background: ${({ theme }) => theme.backgroundDark};
  }
`
