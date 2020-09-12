import * as React from 'react';
import { Text } from 'theme-ui';
import Cover from '@components/Cover';

const IndexPage = (): React.ReactElement => (
  <Cover>
    <Text variant="medium">Lead Frontend Developer and UX Designer.</Text>
    <Text variant="medium">Over 10 years industry experience crafting intuitive interfaces and design systems.</Text>
    <Text variant="medium">Run on React, GraphQL, TypeScript, Node, Figma.</Text>
    <Text variant="medium">Based in London, UK. Remote-ready.</Text>
  </Cover>
);

export default IndexPage;
