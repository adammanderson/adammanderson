import styled from 'styled-components';
import media from '../../utils/media';

interface ToggleProps {
  isToggled: boolean;
}

export const TogglerWrapper = styled.div<ToggleProps>`
  position: absolute;
  top: 0;
  right: 20px;
  transform: scale(0.8) translateY(-20px);
  transition: all 300ms ease-in-out 0s;
  cursor: pointer;
  &:hover {
    transform: scale(0.8) translateY(-16px);
  }
  ${({ isToggled }): string => isToggled && `
    transform: scale(0.8) translateY(-20px);
  `};
  ${media.tablet`
    right: 80px;
  `}
`;
