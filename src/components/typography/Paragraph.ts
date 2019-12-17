import styled from 'styled-components';

export const Paragraph = styled.p`
  margin: 0 0 1em 0;
  color: ${({ theme }): string => theme.text.default};
  transition: all 300ms ease-in-out 0s;
`;
