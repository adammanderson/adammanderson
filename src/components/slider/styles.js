import styled, { keyframes } from 'styled-components'

export const SliderWrapper = styled.section`
`

export const Slide = styled.div`
  display: flex;
  min-height: 100vh;
`

export const SlideContent = styled.div`
  position: relative;
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  z-index: 1;
`

export const SlideContentInner = styled.div`
  position: relative;
  padding: 6em 4em 2em 6em;
`

export const SlideCategory = styled.span`
  position: absolute;
  left: 0.3em;
  top: 0.5em;
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
  position: relative;
  flex: 1;
  background-color: ${props => props.theme.placeholder};
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const UpNext = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1em 4em 2em 6em;
  font-weight: ${props => props.theme.fontWeightBold};
`

const progressWidth = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`

export const UpNextProgress = styled.div`
  position: relative;
  margin-top: 3px;
  height: 3px;
  background: ${props => props.theme.placeholder};
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    background: ${props => props.theme.buttonBackground};
    animation: ${progressWidth} 3s 1s cubic-bezier(0.77, 0, 0.175, 1);
  }
`
