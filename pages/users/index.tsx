import Head from 'next/head';
import { Fragment } from 'react';
import Dammy_page from '../../src/components/dammy-page';

const Users = () => {
  return (
    <Fragment>
      <Head>
        <title>Users</title>
        <meta name='description' content='' />
      </Head>
      <Dammy_page />
    </Fragment>
  );
};

export default Users;
