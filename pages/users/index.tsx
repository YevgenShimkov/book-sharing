import Head from 'next/head';
import { Fragment } from 'react';
import Dammy_page from '../../src/components/Dammy_page';

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
