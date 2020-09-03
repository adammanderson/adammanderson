import * as React from 'react';
import { Container, Flex, ThemeProvider } from 'theme-ui';
import Header from '@components/Header';
import theme from '@theme';

interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({
  children,
}: ShellProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Header />
        <Container>
          {children}
        </Container>
      </Flex>
    </ThemeProvider>
  );
}
