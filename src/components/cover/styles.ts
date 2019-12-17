import styled from 'styled-components';
import posed from 'react-pose';
import media from '../../utils/media';
import { fadeInUp } from '../../utils/animations';

export const CoverWrapper = styled.section`
  display: flex;
  align-items: center;
  ${media.tablet`
    min-height: 100vh;
  `};
`;

export const CoverInner = styled(posed.div({
  enter: {
    staggerChildren: 2000,
  },
}))`
`;

export const AnimatedText = styled(posed.span(fadeInUp))`
  display: block;
  margin: 0 0 0.3em 0;
`;
