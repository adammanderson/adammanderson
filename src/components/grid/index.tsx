import * as React from 'react';
import { GridWrapper, GridItem } from './styles';
import { Paragraph, MediumHeading, BigHeading } from '../typography';

export default (): React.ReactElement => (
  <GridWrapper>
    <GridItem>
      <BigHeading>Articles</BigHeading>
    </GridItem>
    <GridItem>
      <MediumHeading>Deployment with now.sh</MediumHeading>
      <Paragraph>
        A reducer is a pure function that takes the previous state and
        an action as arguments and returns a new state.
      </Paragraph>
    </GridItem>
    <GridItem>
      <MediumHeading>Craft Animations in React</MediumHeading>
      <Paragraph>
        A reducer is a pure function that takes the previous state and
        an action as arguments and returns a new state.
      </Paragraph>
    </GridItem>
    <GridItem>
      <MediumHeading>Code Splitting with React Suspense</MediumHeading>
      <Paragraph>
        React.Suspense, along with React.lazy(), introduced in v16.6,
        adds new functionality that allows components to wait for
        something before actually rendering.
      </Paragraph>
    </GridItem>
    <GridItem>
      <MediumHeading>Deployment with now.sh</MediumHeading>
      <Paragraph>
        A reducer is a pure function that takes the previous state and
        an action as arguments and returns a new state.
      </Paragraph>
    </GridItem>
    <GridItem>
      <MediumHeading>Craft Animations in React</MediumHeading>
      <Paragraph>
        A reducer is a pure function that takes the previous state
        and an action as arguments and returns a new state.
      </Paragraph>
    </GridItem>
  </GridWrapper>
)
