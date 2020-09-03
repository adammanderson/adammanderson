import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';
import ThemeProvider from '../utils/ThemeProvider';

class AdamApp extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider>
        <Layout>
          <Head>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default AdamApp;
