import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
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
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}

export default Adam
