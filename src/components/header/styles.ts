import styled from 'styled-components';
import media from '../../utils/media';

export const HeaderWrapper = styled.section`
  position: sticky;
  top: 0;
  flex: 0 0 300px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  ${media.tablet`
    min-height: 100vh;
  `};
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 1.5em;
  ${media.tablet`
    min-height: 60vh;
    padding: 0 2em;
  `};
`;

export const Brand = styled.div`
  ${({ theme }): string => `
    color: ${theme.text.alternate};
    font-weight: ${theme.typography.fontWeights.bold};
  `};
  font-size: 1.1em;
`;
