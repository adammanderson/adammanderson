/** @jsx jsx */
import * as React from 'react';
import { jsx, Flex, Box } from 'theme-ui';
import { GitHub, Linkedin, Music } from 'react-feather';
import ThemeToggler from '@components/ThemeToggler';
import styles from './styles';

const social = [{
  name: 'LinkedIn',
  Icon: Linkedin,
  href: 'https://www.linkedin.com/in/adammanderson',
}, {
  name: 'Github',
  Icon: GitHub,
  href: 'https://github.com/adammanderson',
}, {
  name: 'Spotify',
  Icon: Music,
  href: '#',
}];

export default function Social(): React.ReactElement {
  return (
    <Flex
      sx={styles.wrapper}
    >
      <ThemeToggler />
      <Box>
        {social.map(({ name, Icon, href }) => (
          <a
            key={name}
            sx={styles.link}
            title={name}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <Icon size={21} />
          </a>
        ))}
      </Box>
    </Flex>
  );
}
