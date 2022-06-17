import { FC } from 'react';
import Image from 'next/image';

import Card from '../card/Card';
import Rating from '../raiting/rating';
import BookDetails from '../book-details/book-details';
import BookHolderCard from '../user-card/book-holder-card';
import Button from '../button/button';
import { Genre } from '../type/enums';
import { Language } from '../type/enums';
import classes from './book-card.module.scss';

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
        src={book.image}
        className={classes.cover}
        height={346}
        width={414}
        alt='book cover'
      />
      {book.rating !== 0 && <Rating rating={book.rating} />}
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
            disabled={!book.availabilityStatus}
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
