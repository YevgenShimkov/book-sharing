import { useState } from 'react';
import Search from '../search/search';
import classes from './main-banner.module.scss';

// main banner with title
const MainBanner = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false); // for change main-banner background

  const title = (
    <>
      <h1 className={classes.title}>Let`s read</h1>
      <h2 className={classes.subtitle}>together</h2>
    </>
  );
  return (
    <section
      className={`${classes.main__banner} ${
        isSearching ? classes.main__banner_filtered : ''
      }`}
    >
      {!isSearching && title}
      <Search isSearch={setIsSearching} />
    </section>
  );
};

export default MainBanner;
