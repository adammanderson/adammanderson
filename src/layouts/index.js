import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyles from '../styles/global-styles'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <ThemeProvider theme={{}}>
    <Fragment>
      <GlobalStyles />
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/nyz2kww.css" />
      </Helmet>
      <Header />
      { children }
      <Footer />
    </Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
