import Header from '../header/header';
import Footer from '../footer/footer';
import MainBanner from '../main-banner/main-banner';

import classes from './layout.module.scss';

/**
 * basic element
 * @param children components from _app.tsx
 * @returns
 */

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MainBanner />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
