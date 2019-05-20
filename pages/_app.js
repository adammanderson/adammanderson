import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/styles/global-styles'
import { darkTheme } from '../components/styles/themes'

class Adam extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={darkTheme}>
          <Fragment>
            <GlobalStyles />
            <Component {...pageProps} />
          </Fragment>
        </ThemeProvider>
      </Container>
    )
  }
}

export default Adam
