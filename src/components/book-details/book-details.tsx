import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { DUMMY_BOOK_OBJ } from '../type/data-types';
import classes from './book-details.module.scss';

const DEFAULT_CURRENCY = 'uah';

type Props = {
  book: DUMMY_BOOK_OBJ;
};

const BookDetails: FC<Props> = ({ book }) => {
  const [langSet, setLangSet] = useState('');
  const [genreSet, setGenreSet] = useState('');

  const {
    availabilityStatus,
    title,
    author,
    genre,
    language,
    pledge,
    alreadyReadTimes,
  } = book;

  // array processing genre & language
  useEffect(() => {
    setGenreSet(genre.join(', '));
    setLangSet(language.join(', '));
  }, [genre, language]);

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
              <div className={classes.descr}>{genreSet}</div>
            </li>
            <li>
              <div className={classes.characteristic}>Language:</div>
              <div className={classes.descr}>{langSet}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.subwrapper}>
        <div
          className={`${classes.available} ${
            availabilityStatus ? classes[''] : classes['available__not']
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
        {alreadyReadTimes && (
          <div className={classes.read__times}>{alreadyReadTimes}</div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
