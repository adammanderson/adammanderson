/** @jsx jsx */
import * as React from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Moon, Sun } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles';

export default function ThemeToggler(): React.ReactElement {
  const { colorMode, setColorMode } = useThemeUI();
  const isDefaultMode = colorMode === 'default';

  const toggleMode = (): void => {
    setColorMode(isDefaultMode ? 'dark' : 'default');
  };

  return (
    <button
      type="button"
      sx={styles.button}
      onClick={toggleMode}
    >
      <motion.div
        sx={styles.icons}
        initial={colorMode}
        animate={isDefaultMode ? 'dark' : 'default'}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        variants={styles.animationVariants}
      >
        <Moon />
        <Sun />
      </motion.div>
    </button>
  );
}
