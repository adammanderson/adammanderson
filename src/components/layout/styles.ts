import styled from 'styled-components';
import media from '../../utils/media';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
`;

export const LayoutContent = styled.div`
  padding: 1.5em;
  ${media.tablet`
    flex: 1;
    padding: 0;
  `};
  ${media.desktop`
    padding: 0 10em 0 0;
  `};
`;
