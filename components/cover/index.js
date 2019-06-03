import { PoseGroup } from 'react-pose'
import {
  CoverWrapper,
  CoverInner,
  CoverHeading,
  CoverText,
} from './styles'

export default () => (
  <CoverWrapper>
    <PoseGroup animateOnMount>
      <CoverInner key="12">
        <CoverHeading key="1">
          Frontend Developer and UX Designer.
        </CoverHeading>
        <CoverHeading key="2">
          Over 8 years experience crafting interfaces.
        </CoverHeading>
        <CoverHeading key="3">
          Run on React, Node, Sketch, Coffee.
        </CoverHeading>
        <CoverHeading key="4">
          Living in London.
        </CoverHeading>
        <CoverText>
          I currently code at the Royal Opera House, Covent Garden.
        </CoverText>
      </CoverInner>
    </PoseGroup>
  </CoverWrapper>
)
