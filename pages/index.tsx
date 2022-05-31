import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Book sharing</title>
        <meta name='description' content='book exchange' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {router.pathname === '/' && <h1>on Home page</h1>}
    </Fragment>
  );
};

export default Home;
