import styled from 'styled-components'

export const SliderWrapper = styled.section`
`

export const Slide = styled.div`
  display: flex;
  min-height: 100vh;
`

export const SlideContent = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  z-index: 1;
`

export const SlideContentInner = styled.div`
  position: relative;
  padding: 2em 4em 2em 8em;
`

export const SlideCategory = styled.span`
  position: absolute;
  left: 0.4em;
  top: 0.12em;
  z-index: -1;
  color: ${props => props.theme.placeholder};
  font-family: ${props => props.theme.serif};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: 10em;
  user-select: none;
`

export const SlideImage = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-flow: column wrap;
  padding: 1em 1em 1em 0;
`

export const SlideImageInner = styled.div`
  flex: 1;
  background-color: ${props => props.theme.placeholder};
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
