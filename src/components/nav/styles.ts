import styled from 'styled-components';
import media from '../../utils/media';

interface NavAttributes {
  spacer?: boolean;
}

export const NavWrapper = styled.section`
  display: none;
  ${media.tablet`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    margin: 1em 0;
  `};
`;

export const NavItem = styled.a<NavAttributes>`
  position: relative;
  padding: 0.2em 0;
  color: ${({ theme }): string => theme.text.alternate};
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease-in-out 0s;
  ${({ spacer }): string => spacer && `
    flex: 1;
  `}
  &:before {
    content: '';
    position:absolute;
    top: 1em;
    width: 2em;
    border-bottom: 1px solid ${({ theme }): string => theme.border.default};
    transform: translateX(-160%);
    transition: all 300ms ease-in-out 0s;
  }
  &:hover {
    color: ${({ theme }): string => theme.text.default};
    &:before {
      border-color: ${({ theme }): string => theme.border.default};
      transform: translateX(-140%);
    }
  }
`;
