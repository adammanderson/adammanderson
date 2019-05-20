import styled from 'styled-components'
import media from '../styles/media'

const P = styled.p`
  color: ${props => props.theme.body};
  line-height: 1.25em;
  font-size: 17px;
  ${media.tablet`
    line-height: 1.4em;
    font-size: 18px;
  `}
`

export default P
