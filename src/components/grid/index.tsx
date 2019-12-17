import * as React from 'react';
import { GridWrapper, GridItem } from './styles';
import { P, MediumHeading, HeavyHeading } from '../typography';

export default (): React.ReactElement => (
  <GridWrapper>
    <GridItem>
      <HeavyHeading>Articles</HeavyHeading>
    </GridItem>
    <GridItem>
      <MediumHeading>Deployment with now.sh</MediumHeading>
      <P>
        A reducer is a pure function that takes the previous state and
        an action as arguments and returns a new state.
      </P>
    </GridItem>
    <GridItem>
      <MediumHeading>Craft Animations in React</MediumHeading>
      <P>
        A reducer is a pure function that takes the previous state and
        an action as arguments and returns a new state.
      </P>
    </GridItem>
    <GridItem>
      <MediumHeading>Code Splitting with React Suspense</MediumHeading>
      <P>
        React.Suspense, along with React.lazy(), introduced in v16.6,
        adds new functionality that allows components to wait for
        something before actually rendering.
      </P>
    </GridItem>
    <GridItem>
      <MediumHeading>Deployment with now.sh</MediumHeading>
      <P>
        A reducer is a pure function that takes the previous state and
        an action as arguments and returns a new state.
      </P>
    </GridItem>
    <GridItem>
      <MediumHeading>Craft Animations in React</MediumHeading>
      <P>
        A reducer is a pure function that takes the previous state
        and an action as arguments and returns a new state.
      </P>
    </GridItem>
  </GridWrapper>
)
