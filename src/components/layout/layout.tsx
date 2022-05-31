import { Fragment } from 'react';
import Header from '../header/header';

import classes from './layout.module.scss';

// general layout
const Layout = (props: any) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
