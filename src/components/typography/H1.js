import styled from 'styled-components'

const H1 = styled.h1`
  color: ${props => props.theme.heading};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: 2.8em;
  line-height: 1em;
  margin-bottom: 0.5em;
`

export default H1
