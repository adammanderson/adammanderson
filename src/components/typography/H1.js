import styled from 'styled-components'
import media from '../../styles/media'

const H1 = styled.h1`
  color: ${props => props.theme.heading};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: 2.1em;
  line-height: 0.9em;
  margin-bottom: 0.3em;
  ${media.tablet`
    font-size: 2.8em;
    margin-bottom: 0.5em;
  `}
`

export default H1
