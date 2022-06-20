import Search from '../search/search';
import classes from './main-banner.module.scss';

// main banner with title
const MainBanner = () => {
  const title = (
    <>
      <h1 className={classes.title}>Let`s read</h1>
      <h2 className={classes.subtitle}>together</h2>
    </>
  );
  return (
    <section className={classes.main__banner}>
      {title}
      <Search />
    </section>
  );
};

export default MainBanner;
