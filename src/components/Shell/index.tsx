import * as React from 'react';
import {
  ThemeProvider,
  Flex,
  Box,
  Heading,
} from 'theme-ui';
import Social from '@components/Social';
import theme from '@theme';
import styles from './styles';

interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({
  children,
}: ShellProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={styles.wrapper}>
        <Flex sx={styles.blurb}>
          <Heading>Frontend Lead. UX Designer. Mentor.</Heading>
        </Flex>
        <Box sx={{ flex: 1 }}>
          <Flex sx={styles.header}>
            <Heading as="h1">Adam Anderson</Heading>
          </Flex>
          {children}
        </Box>
        <Social />
      </Flex>
    </ThemeProvider>
  );
}
