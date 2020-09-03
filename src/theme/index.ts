import colors from './colors';
import styles from './styles';
import components from './components';

export default {
  breakpoints: ['40em', '56em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 5],
  fontSizes: ['0.85em', 20, '1.25em', '1.875em', '2.625em'],
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Poppins", sans-serif',
  },
  fontWeights: {
    body: '400',
    heading: '600',
  },
  lineHeights: {
    small: '1.4em',
    body: '1.65em',
    heading: '1.5em',
  },
  colors,
  styles,
  ...components,
};
