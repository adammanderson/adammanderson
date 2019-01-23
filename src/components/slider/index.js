import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'

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
} from './styles'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSlide: 0,
    }
  }

  render() {
    const { activeSlide } = this.state
    const { slides } = this.props
    console.log(slides)
    return (
      <SliderWrapper>
        { slides.map((slide, index) => (
          <Slide key={index}>
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
