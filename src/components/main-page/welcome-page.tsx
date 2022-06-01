import classes from './welcome-page.module.scss';

// main banner with title
const MainBanner = () => {
  return (
    <section className={classes.main__banner}>
      <h1 className={classes.title}>Let`s read</h1>
      <h2 className={classes.subtitle}>together</h2>
    </section>
  );
};

export default MainBanner;
