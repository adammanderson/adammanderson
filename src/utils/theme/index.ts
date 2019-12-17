import { ThemeAttributes } from '../../types/theme';
import {
  base,
  berry,
  crimson,
  powder,
  sunset,
} from './palettes';
import typography from './typography';

export const themes = {
  base,
  berry,
  crimson,
  powder,
  sunset,
};

const theme = (palette = base): ThemeAttributes => ({
  typography,
  background: {
    default: palette.base,
    alternate: palette.base,
  },
  border: {
    default: palette.highlight,
    alternate: palette.highlight,
  },
  text: {
    default: palette.fore,
    alternate: palette.highlight,
  },
});

export default theme;
