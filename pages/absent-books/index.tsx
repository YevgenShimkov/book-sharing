import Head from 'next/head';
import { Fragment } from 'react';
import Dammy_page from '../../src/components/dammy-page';

const AbsentBooks = () => {
  return (
    <Fragment>
      <Head>
        <title>Absent books</title>
        <meta name='description' content='' />
      </Head>
      <Dammy_page />
    </Fragment>
  );
};

export default AbsentBooks;
