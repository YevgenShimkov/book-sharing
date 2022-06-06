import Checkbox from './checkbox';
import classes from './filters.module.scss';

const Filters = () => {
  return (
    <div className={classes.filters}>
      <h2 className={classes.title}>Filters</h2>
      <div className={classes.accessibility}></div>
    </div>
  );
};

export default Filters;
