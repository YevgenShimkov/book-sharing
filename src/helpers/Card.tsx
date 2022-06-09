import { FC } from 'react';

import classes from './Card.module.scss';

type Props = {
  children?: React.ReactNode;
  className: string;
};

// wrapper for boock card & filter
const Card: FC<Props> = ({ className, children }) => {
  return (
    <div className={`${classes[className]} ${classes.card}`}>{children}</div>
  );
};

export default Card;
