import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'
import media from '../styles/media'

export const SliderWrapper = styled.section`
`

export const Slide = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
  ${media.tablet`
    flex-flow: row wrap;
  `}
`

export const SlideContent = styled.div`
  position: relative;
  order: 1;
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  z-index: 1;
  ${media.tablet`
    order: 0;
  `}
`

const slideContentAnimation = {
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 500,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 500,
      ease: 'easeInOut',
    },
  },
}

export const SlideContentInner = styled(posed.div(slideContentAnimation))`
  position: relative;
  padding: 0.5em 1em 4em 1em;
  ${media.tablet`
    padding: 6em 4em 2em 6em;
  `}
`

const categoryAnimation = {
  enter: {
    y: 0,
    opacity: 0.8,
    transition: {
      duration: 1000,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1000,
      ease: 'easeInOut',
    },
  },
}

export const SlideCategory = styled(posed.span(categoryAnimation))`
  position: absolute;
  left: 0.1em;
  top: -0.2em;
  z-index: -1;
  color: ${props => props.theme.placeholder};
  font-family: ${props => props.theme.serif};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: 8em;
  user-select: none;
  ${media.tablet`
    left: 0.3em;
    top: 0.5em;
    font-size: 10em;
  `}
`

export const SlideImage = styled.div`
  order: 0;
  flex: 1 0 30%;
  display: flex;
  flex-flow: column wrap;
  padding: 0.5em;
  ${media.tablet`
    order: 1;
    flex: 0 0 50%;
    padding: 1em 1em 1em 0;
  `}
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
  padding: 1em;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeightBold};
  color: ${props => props.theme.heading};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  ${media.tablet`
    padding: 1em 4em 2em 6em;
    width: auto;
    font-size: 18px;
  `}
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
