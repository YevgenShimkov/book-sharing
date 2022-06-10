import BookCard from '../book-card/book-card';
import Filters from '../filters/filters';

import classes from './main-content.module.scss';
/**
 * filters / book cards
 * @returns content after main banner
 */
const MainPage = () => {
  return (
    <section className={classes.main__content}>
      <Filters />
      <BookCard />
      <BookCard />
    </section>
  );
};

export default MainPage;
