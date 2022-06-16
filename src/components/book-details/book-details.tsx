import Image from 'next/image';
import { FC } from 'react';

import classes from './book-details.module.scss';

const DEFAULT_CURRENCY = 'uah';

type Props = {
  book: {
    coverImg: string;
    title: string;
    author: string;
    genre: string[];
    year: number;
    language: string;
    publisher: string;
    id: number;
    available: boolean;
    pledge?: number;
    read__times?: number;
  };
};

const BookDetails: FC<Props> = ({ book }) => {
  const { available, title, author, genre, language, pledge, read__times } =
    book;

  let ganre = '';

  genre.forEach((itm) => {
    ganre =
      ganre.length === 0
        ? ganre + itm.toString()
        : ganre + ', ' + itm.toString();
  });

  return (
    <div className={classes.book__details}>
      <div className={classes.wrapper}>
        <div className={classes.likeshare}>
          <div className={classes.icons}>
            <Image
              src={'/assets/icons/heart.svg'}
              width={24}
              height={24}
              alt={'like'}
            />
          </div>
          <div className={classes.icons}>
            <Image
              className={classes.icons}
              src={'/assets/icons/share.svg'}
              width={24}
              height={24}
              alt={'share'}
            />
          </div>
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.descriptions}>
          <ul>
            <li>
              <div className={classes.characteristic}>Author:</div>
              <div className={classes.descr}>{author}</div>
            </li>
            <li>
              <div className={classes.characteristic}>Genre:</div>
              <div className={classes.descr}>{ganre}</div>
            </li>
            <li>
              <div className={classes.characteristic}>Language:</div>
              <div className={classes.descr}>{language}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.subwrapper}>
        <div
          className={`${classes.available} ${
            available ? classes[''] : classes['available__not']
          }`}
        >
          available
        </div>
        <div className={classes.pledge__wrapper}>
          <span className={classes.pledge}>pledge:</span>
          {pledge && (
            <div className={classes.price}>
              {pledge + ' ' + DEFAULT_CURRENCY}
            </div>
          )}
        </div>
        {read__times && (
          <div className={classes.read__times}>{read__times}</div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
