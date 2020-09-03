import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Shell from '@components/Shell';

export default function Adam({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <Shell>
      <Head>
        <title>Adam Anderson. Lead Frontend Developer & Mentor</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Shell>
  );
}
