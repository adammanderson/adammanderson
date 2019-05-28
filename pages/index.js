import React, { Fragment } from 'react'
import Head from 'next/head'
import Cover from '../components/cover'
import {
  BigHeading,
  P,
} from '../components/typography'
import Grid from '../components/grid'

const IndexPage = () => (
  <Fragment>
    <Head>
      <title>Adam Anderson | Front-end Developer, London</title>
    </Head>
    <Cover>
      <BigHeading>
        Frontend Developer and UX Designer.
        <br />
        Over 8 years experience crafting interfaces.
        <br />
        Run on React, Node, Sketch, Coffee.
        <br />
        Living in London.
      </BigHeading>
      <P>
        I currently code at the Royal Opera House, Covent Garden.
      </P>
    </Cover>
    <Grid />
  </Fragment>
)

export default IndexPage
