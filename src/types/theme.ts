export interface ThemeAttributes {
  typography: TypographyAttributes;
  background: PaletteShades;
  border: PaletteShades;
  text: PaletteShades;
}

export interface TypographyAttributes {
  fonts: Fonts;
  fontSizes: TypeSizes;
  fontWeights: FontWeights;
  lineHeights: TypeSizes;
}

export interface ColorsAttributes {
  black: string;
  blue: ColorShades;
  pink: ColorShades;
  transparent: string;
  white: string;
}

export interface PaletteAttributes {
  base: string;
  fore: string;
  highlight: string;
  alternate: string;
}

interface PaletteShades {
  default: string;
  alternate: string;
}

interface ColorShades {
  darker: string;
  default: string;
  lighter: string;
}

interface Fonts {
  body: string;
  heading: string;
}

interface TypeSizes {
  small: string;
  normal: string;
  large: string;
}

interface FontWeights {
  normal: number;
  bold: number;
}
