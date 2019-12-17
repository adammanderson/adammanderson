import styled from 'styled-components';
import media from '../../utils/media';

export const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0px;
  margin: 4em 0;
`;

export const GridItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 1.5em;
  border-top: 1px solid ${({ theme }): string => theme.border.default};
  border-left: 1px solid ${({ theme }): string => theme.border.default};
  justify-content: flex-end;
  ${media.desktop`
    &:nth-child(-n+3) {
      border-top: none;
      justify-content: flex-start;
    }
    &:nth-child(3n+1) {
      border-left: none;
    }
  `};
`;
