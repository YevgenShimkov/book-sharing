import { FC } from 'react';
import classes from './rating.module.scss';

const rating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className={classes.rating}>
      <div className={classes.weigth}>{rating}</div>
      <span />
    </div>
  );
};

export default rating;
