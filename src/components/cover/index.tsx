import * as React from 'react';
import { PoseGroup } from 'react-pose';
import { BigHeading, Paragraph } from '../typography';
import {
  CoverWrapper,
  CoverInner,
  AnimatedText,
} from './styles';

export default (): React.ReactElement => (
  <CoverWrapper>
    <PoseGroup animateOnMount>
      <CoverInner key="12">
        <BigHeading>
          <AnimatedText key="1">
            Lead Frontend Developer and UX Designer.
          </AnimatedText>
          <AnimatedText key="2">
            Over 8 years experience crafting interfaces.
          </AnimatedText>
          <AnimatedText key="3">
            Run on React, Node, Sketch, Coffee.
          </AnimatedText>
          <AnimatedText key="4">
            Living in London.
          </AnimatedText>
        </BigHeading>
        <Paragraph>
          I currently code at an awesome startup.
        </Paragraph>
      </CoverInner>
    </PoseGroup>
  </CoverWrapper>
);
