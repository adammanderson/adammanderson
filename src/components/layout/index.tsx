import * as React from 'react';
import { LayoutWrapper, LayoutContent } from './styles';
import Header from '../header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({
  children,
}: LayoutProps): React.ReactElement => (
  <LayoutWrapper>
    <Header />
    <LayoutContent>
      { children }
    </LayoutContent>
  </LayoutWrapper>
);

export default Layout;
