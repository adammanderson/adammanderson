import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'
import { PoseGroup } from 'react-pose'

import { H1, P } from '../typography'
import Button from '../Button'
import {
  SliderWrapper,
  Slide,
  SlideContent,
  SlideContentInner,
  SlideImage,
  SlideImageInner,
  SlideCategory,
  UpNext,
  UpNextProgress,
} from './styles'

const SLIDER_DELAY = 5000

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSlideIndex: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.handleNextSlide()
    }, SLIDER_DELAY)
  }

  handleNextSlide = () => {
    const { slides } = this.props
    this.setState(state => ({
      activeSlideIndex: state.activeSlideIndex + 1 === slides.length ? 0 : state.activeSlideIndex + 1
    }))
  }

  render() {
    const { activeSlideIndex } = this.state
    const { slides } = this.props
    const activeSlide = slides[activeSlideIndex]
    const nextSlide = activeSlideIndex + 1 === slides.length ? slides[0] : slides[activeSlideIndex + 1]

    return (
      <SliderWrapper>
        <Slide>
          <SlideContent>
            <PoseGroup>
              <SlideContentInner key={activeSlideIndex}>
                <PoseGroup>
                  <SlideCategory
                    key={activeSlideIndex}
                    onPoseComplete={this.posecomplete}
                  >
                    {activeSlide.category}
                  </SlideCategory>
                </PoseGroup>
                <H1>{activeSlide.title}</H1>
                <P>{activeSlide.excerpt}</P>
                <Button href={activeSlide.slug}>
                  Read
                  <ArrowRight size={19} />
                </Button>
              </SlideContentInner>
            </PoseGroup>
            <UpNext>
              Next: {nextSlide.title}
              <UpNextProgress key={activeSlideIndex} delay={SLIDER_DELAY} />
            </UpNext>
          </SlideContent>
          <SlideImage>
            <PoseGroup>
              <SlideImageInner
                key={activeSlideIndex}
                image={activeSlide.image}
              />
            </PoseGroup>
          </SlideImage>
        </Slide>
      </SliderWrapper>
    )
  }
}

Slider.defaultProps = {
  slides: [],
}

Slider.propTypes = {
  slides: PropTypes.instanceOf(Array),
}
