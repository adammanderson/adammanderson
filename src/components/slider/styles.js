import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'

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

const categoryAnimation = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 500,
      ease: 'easeInOut'
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 500,
      ease: 'easeInOut'
    },
  },
}

export const SlideCategory = styled(posed.span(categoryAnimation))`
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

const imageAnimation = {
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 800,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 800,
      ease: 'easeInOut',
    },
  },
}

export const SlideImageInner = styled(posed.div(imageAnimation))`
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
  color: ${props => props.theme.heading}
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
    background: ${props => props.theme.progress};
    animation: ${progressWidth} ${props => (props.delay ? `${props.delay}ms` : '3s')} 0s cubic-bezier(0.77, 0, 0.175, 1);
  }
`
