export interface Breakpoints {
  [index: string]: number;
  desktop: number;
  tablet: number;
  phone: number;
}

const breakpoints: Breakpoints = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export default breakpoints;
