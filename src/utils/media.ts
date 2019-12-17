/* eslint-disable @typescript-eslint/no-explicit-any */

import { css, SimpleInterpolation } from 'styled-components';
import breakpoints from './theme/breakpoints';

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...args: any[]): SimpleInterpolation => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
       ${css(literals, ...args)}
    }
  `;

  return acc;
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => any>);

export default media;
