import * as React from 'react';
import { ThemeTogglerProps } from '.';
import { TogglerWrapper } from './styles';

const theme = {
  on: {
    light: '#f7f7f7',
    bulb: '#ff0',
  },
  off: {
    light: '#ccc',
    bulb: '#9c9c9c',
  },
};

const ThemeToggler = ({
  isToggled,
  toggle,
}: ThemeTogglerProps): React.ReactElement => (
  <TogglerWrapper
    isToggled={isToggled}
    onClick={toggle}
    role="button"
  >
    <svg width={51} height={75}>
      <g>
        <path
          d="M15.758 63.189l20.028-.085c-.784 1.835-1.525 10.729-10.422 10.342-8.896-.387-9.606-10.257-9.606-10.257z"
          fill={isToggled ? theme.on.bulb : theme.off.bulb}
        />
        <path
          d="M1.54 62.75v1h48v-1c0-13.2-10.8-24-24-24s-24 10.8-24 24zm24-22c11.8 0 21.5 9.3 22 21h-44c.5-11.7 10.2-21 22-21zM18.54 30.25v6c0 .6.4 1 1 1s1-.4 1-1v-6c0-2.5 2-4.5 4.5-4.5h1c2.5 0 4.5 2 4.5 4.5v6c0 .6.4 1 1 1s1-.4 1-1v-6c0-3.6-2.9-6.5-6.5-6.5h-1c-3.6 0-6.5 2.9-6.5 6.5zM26.54 21.75v-20c0-.6-.4-1-1-1s-1 .4-1 1v20c0 .6.4 1 1 1s1-.4 1-1z"
          fill={isToggled ? theme.on.light : theme.off.light}
        />
      </g>
    </svg>
  </TogglerWrapper>
);

export default ThemeToggler;
