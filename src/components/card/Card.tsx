import { FC } from 'react';

import classes from './Card.module.scss';

type Props = {
  children?: React.ReactNode;
  className: string;
};

/**
 * wrapper for book card & filter
 * @param param0 'book' and 'filter' have different properties
 * @returns
 */
const Card: FC<Props> = ({ className, children }) => {
  return (
    <div className={`${classes[className]} ${classes.card}`}>{children}</div>
  );
};

export default Card;
