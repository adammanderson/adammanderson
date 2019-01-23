import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ArrowRight, ArrowLeft } from 'react-feather'

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

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSlide: 1,
    }
  }

  render() {
    const { activeSlide } = this.state
    const { slides } = this.props
    const nextSlide = activeSlide + 1 === slides.length ? slides[0] : slides[activeSlide + 1]

    return (
      <SliderWrapper>
        { slides.map(slide => (
          <Slide key={slide.title}>
            <SlideContent>
              <SlideContentInner>
                <SlideCategory>{slide.category}</SlideCategory>
                <H1>{slide.title}</H1>
                <P>{slide.excerpt}</P>
                <Button href={slide.slug}>
                  Read
                  <ArrowRight size={19} />
                </Button>
              </SlideContentInner>
              <UpNext>
                Next: {nextSlide.title}
                <UpNextProgress />
              </UpNext>
            </SlideContent>
            <SlideImage>
              <SlideImageInner image={slide.image} />
            </SlideImage>
          </Slide>
        ))}
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
