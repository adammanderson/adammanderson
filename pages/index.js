import React, { Fragment } from 'react'
import Head from 'next/head'
import SplitText from 'react-pose-text'
import Cover from '../components/cover'
import {
  BigHeading,
  P,
  Highlight,
} from '../components/typography'

const charPoses = {
  exit: { opacity: 0, x: 90 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 100,
  },
};

const IndexPage = () => (
  <Fragment>
    <Head>
      <title>Adam Anderson | Front-end Developer, London</title>
    </Head>
    <Cover>
      <BigHeading><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>Adam.</SplitText></BigHeading>
      <P>
        I’m a front-end developer based in London, currently coding at the
        <Highlight> Royal Opera House, Covent Garden</Highlight>
        . With more than 8 years’ experience I
        specialise in crafting intuitive interfaces, interaction design and UX.
        I run on React, ES6, Node, SCSS, Sketch and filter coffee.
      </P>
    </Cover>
  </Fragment>
)

export default IndexPage
