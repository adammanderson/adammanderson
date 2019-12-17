import 'styled-components';
import { ThemeAttributes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeAttributes {}
}
