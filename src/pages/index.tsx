import * as React from 'react';
import Head from 'next/head';
import Cover from '../components/cover';

const IndexPage = (): React.ReactElement => (
  <>
    <Head>
      <title>Adam Anderson | Front-end Developer, London</title>
    </Head>
    <Cover />
  </>
);

export default IndexPage;
