import { Fragment } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

import classes from './layout.module.scss';
import MainBanner from '../main-banner/main-banner';

// general layout
const Layout = (props: any) => {
  return (
    <Fragment>
      <Header />
      <MainBanner />
      {/* <main className={classes.main}>{props.children}</main> */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
