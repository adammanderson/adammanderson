export { default as ThemeToggler } from './ThemeToggler';

export interface ThemeTogglerProps {
  isToggled: boolean;
  toggle: () => void;
}
