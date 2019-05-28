import styled from 'styled-components'
import { boldFont } from '../styles/fonts'

export const HeaderWrapper = styled.section`
  flex: 0 0 300px;
  display: flex;
  align-items: center;
`

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 60vh;
  padding: 0 2em;
`

export const Brand = styled.div`
  ${boldFont};
  color: ${({ theme }) => theme.heading};
  font-size: 1.1em;
`
