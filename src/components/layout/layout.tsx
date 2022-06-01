import { Fragment } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

import classes from './layout.module.scss';
import WelcomePage from '../main-page/welcome-page';

// general layout
const Layout = (props: any) => {
  return (
    <Fragment>
      <Header />
      <WelcomePage />
      {/* <main className={classes.main}>{props.children}</main> */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
