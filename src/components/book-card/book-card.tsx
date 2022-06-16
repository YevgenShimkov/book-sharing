import Image from 'next/image';

import Card from '../card/Card';
import Rating from '../raiting/rating';
import BookDetails from '../book-details/book-details';
import BookHolderCard from '../user-card/book-holder-card';
import Button from '../button/button';
import classes from './book-card.module.scss';
import { FC } from 'react';

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
  name: string;
  status: boolean;
  city: string;
  avatar: string;
  rating?: number;
};

const BookCard: FC<Props> = ({ name, status, city, avatar, rating, book }) => {
  const orderButtonHandler = () => {};
  const commentButtonHandler = () => {};

  return (
    <Card className={'book'}>
      <Image
        src={book.coverImg}
        className={classes.cover}
        height={346}
        width={414}
        alt='book cover'
      />
      <Rating />
      <div className={classes.container}>
        <BookDetails book={book} />
        <BookHolderCard
          avatar={avatar}
          status={status}
          name={name}
          city={city}
          rating={rating}
        />
        <div className={classes.button__wrapper}>
          <Button
            type='button'
            className={''}
            onClick={orderButtonHandler}
            disabled={!book.available}
          >
            Order book
          </Button>
          <Button
            type='button'
            className={'secondary'}
            onClick={commentButtonHandler}
          >
            Comment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
