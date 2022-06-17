import Image from 'next/image';
import { FC } from 'react';

import { Genre } from '../type/enums';
import { Language } from '../type/enums';
import classes from './book-details.module.scss';

const DEFAULT_CURRENCY = 'uah';

const languageList = ['English', 'Ukrainian', 'French'];

const genreList = [
  'gotic literature',
  'fantasy',
  'historique',
  'saga',
  'detective',
  'adventure',
  'socio-psychological novel',
];

type Props = {
  book: {
    image: string;
    title: string;
    author: string;
    genre: Genre[];
    year: number;
    language: Language[];
    publisher: string;
    id: number;
    availabilityStatus: boolean;
    pledge?: number;
    alreadyReadTimes?: number;
    rating: number;
  };
};

const BookDetails: FC<Props> = ({ book }) => {
  const {
    availabilityStatus,
    title,
    author,
    genre,
    language,
    pledge,
    alreadyReadTimes,
  } = book;

  let ganre = '';
  let lang = '';

  language.forEach((itm) => {
    lang = languageList[itm];
  });
  // if (genre) {
  genre.forEach((itm) => {
    ganre =
      ganre.length === 0
        ? ganre + genreList[itm]
        : ganre + ', ' + genreList[itm];
  });
  // }

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
              <div className={classes.descr}>{lang}</div>
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
