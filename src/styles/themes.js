import colours from './colours'
import fonts from './fonts'

export const lightTheme = {
  ...fonts,
  placeholder: colours.lightGrey,
  body: colours.darkGrey,
  heading: colours.darkGrey,
  background: colours.white,
  buttonBackground: colours.blue,
  buttonText: colours.white,
  logo: colours.darkGrey,
}

export const darkTheme = {
  ...fonts,
  placeholder: colours.darkerGrey,
  body: colours.white,
  heading: colours.lightGrey,
  background: colours.darkGrey,
  buttonBackground: colours.white,
  buttonText: colours.blue,
  logo: colours.darkestGrey,
}
