import styled, { css } from 'styled-components';
import media from '../../utils/media';

const baseHeadingStyles = css`
  ${({ theme }): string => `
    font-weight: ${theme.typography.fontWeights.normal};
    color: ${theme.text.default};
    transition: all 300ms ease-in-out 0s;
  `};
`;

export const BigHeading = styled.h1`
  ${baseHeadingStyles};
  font-size: 1.7em;
  line-height: 1.1em;
  margin: 0 0 1em 0;
  ${media.tablet`
    font-size: 2.4em;
  `};
`;

export const MediumHeading = styled.h2`
  ${baseHeadingStyles};
  margin: 0 0 0.6em 0;
  font-size: 1.2em;
`;

export const SmallHeading = styled.h3`
  ${baseHeadingStyles};
  font-size: ${({ theme }): string => theme.typography.fontSizes.small};
`;
