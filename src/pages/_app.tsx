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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-154720311-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-154720311-1');
          `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Shell>
  );
}
