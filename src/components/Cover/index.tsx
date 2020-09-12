import * as React from 'react';
import { Box, Container } from 'theme-ui';
import styles from './styles';

interface CoverProps {
  children: React.ReactNode;
}

export default function Cover({
  children,
}: CoverProps): React.ReactElement {
  return (
    <Box sx={styles.wrapper}>
      <Container>
        {children}
      </Container>
    </Box>
  );
}
