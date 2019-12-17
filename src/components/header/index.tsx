import * as React from 'react';
import Nav from '../nav';
import {
  HeaderWrapper,
  HeaderInner,
  Brand,
} from './styles';

export default (): React.ReactElement => (
  <HeaderWrapper>
    <HeaderInner>
      <Brand>Adam Anderson</Brand>
      <Nav />
    </HeaderInner>
  </HeaderWrapper>
);
