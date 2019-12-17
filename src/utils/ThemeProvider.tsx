import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeToggler } from '../components/ThemeToggler';
import GlobalStyles from './GlobalStyles';
import theme, { themes } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.ReactElement => {
  const [isNight, toggleNight] = React.useState(true);

  return (
    <StyledThemeProvider theme={theme(isNight ? themes.berry : themes.powder)}>
      <GlobalStyles />
      {children}
      <ThemeToggler
        isToggled={isNight}
        toggle={(): void => toggleNight(!isNight)}
      />
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
