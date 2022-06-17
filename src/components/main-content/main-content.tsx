import BookCard from '../book-card/book-card';
import Filters from '../filters/filters';
import { Genre } from '../type/enums';
import { Language } from '../type/enums';

import classes from './main-content.module.scss';
/**
 * filters / book cards
 * @returns content after main banner
 */
const MainPage = () => {
  type DUMMY_BOOK_OBJ = {
    id: number;
    title: string;
    image: string;
    author: string;
    genre: Genre[];
    language: Language[];
    alreadyReadTimes?: number;
    availabilityStatus: boolean;
    rating: number;
    pledge?: number;
    publisher: string;
    year: number;
  };

  type DUMMY_BOOKHANDLER_OBJ = {
    id: number;
    name: string;
    status: boolean;
    city: string;
    deals: number;
    following: number;
    followers: number;
    avatar: string;
    books?: DUMMY_BOOK_OBJ[];
    rating?: number;
  };

  const DUMMY_BOOKHANDLER = [
    {
      id: 1,
      name: 'Ksenia Maratovska',
      status: true,
      // rating: 78,
      city: 'Kyiv',
      deals: 36,
      following: 234,
      followers: 16,
      avatar: '/assets/avatar/picard.jpeg',
      books: [
        {
          image: '/assets/book-cover/portret-doriana-greya.jpg',
          title: 'The Picture of Dorian Gray',
          author: 'Oscar Wilde',
          genre: [Genre.adventure, Genre.fantasy],
          year: 1890,
          language: [Language.English],
          publisher: 'Folio',
          id: 6,
          alreadyReadTimes: 10,
          availabilityStatus: true,
          rating: 0,
        },
        {
          image: '/assets/book-cover/Paris.jpg',
          title: 'Paris',
          author: 'Edward Reserfort',
          genre: [Genre.historique, Genre.saga],
          year: 2013,
          language: [Language.French],
          publisher: 'Lever du soleil',
          pledge: 200,
          id: 3,
          alreadyReadTimes: 265,
          availabilityStatus: false,
          rating: 2,
        },
      ],
    },
    {
      id: 2,
      name: 'Vasia Chitaushiu',
      status: true,
      rating: 15,
      city: 'Pereyaslav-Khmelnitskiy',
      deals: 12,
      following: 145,
      followers: 140,
      avatar: '/assets/avatar/picard.jpeg',
      books: [
        {
          image: '/assets/book-cover/fellowship-of-the-ring.jpg',
          title: 'Fellowship of the ring',
          author: 'John Ronald Reuel Tolkien',
          genre: [Genre.fantasy],
          year: 1954,
          language: [Language.English],
          publisher: 'Sunrise',
          pledge: 2000,
          id: 45,
          availabilityStatus: true,
          rating: 4,
        },
        {
          image: '/assets/book-cover/return-of-the-king.jpg',
          title: 'Return of The king',
          author: 'John Ronald Reuel Tolkien',
          genre: [Genre.fantasy],
          year: 1955,
          language: [Language.English],
          publisher: 'Sunrise',
          pledge: 1500,
          id: 5,
          alreadyReadTimes: 15,
          availabilityStatus: false,
          rating: 5,
        },
      ],
    },
    {
      id: 3,
      name: 'Kiril Kabanov',
      status: false,
      rating: 100,
      city: 'Lviv',
      deals: 1561,
      following: 1450,
      followers: 1400,
      avatar: '/assets/avatar/picard.jpeg',
      books: [
        {
          image: '/assets/book-cover/angels-demons.jpg',
          title: 'Angels and Demons',
          author: 'Dan Brown',
          genre: [Genre.adventure, Genre.detective],
          year: 1999,
          language: [Language.English],
          publisher: 'Svitanok',
          pledge: 200,
          id: 1,
          alreadyReadTimes: 48,
          availabilityStatus: false,
          rating: 4.5,
        },
        {
          image: '/assets/book-cover/Crime and Punishment.jpg',
          title: 'Crime and Punishment',
          author: 'Fyodor Dostoevsky',
          genre: [Genre['socio-psychological novel']],
          year: 1866,
          language: [Language.Ukrainian],
          publisher: 'Zakat',
          id: 2,
          availabilityStatus: true,
          rating: 2.5,
        },
      ],
    },
    {
      id: 4,
      name: 'Julia Kostromska',
      status: false,
      rating: 97,
      city: 'Ivano-Fr',
      deals: 56,
      following: 0,
      followers: 0,
      avatar: '/assets/avatar/picard.jpeg',
    },
    {
      id: 5,
      name: 'Albina Kryjova',
      status: false,
      rating: 45,
      city: 'Krop',
      deals: 61,
      following: 10,
      followers: 14,
      avatar: '/assets/avatar/picard.jpeg',
    },
  ];

  // for books render
  const renderBooks = () => {
    return DUMMY_BOOKHANDLER.map((bookhandler: DUMMY_BOOKHANDLER_OBJ) => {
      const { city, avatar, name, status, rating } = bookhandler;
      if (bookhandler.books) {
        return bookhandler.books.map((book: DUMMY_BOOK_OBJ) => {
          return (
            <BookCard
              key={book.id}
              book={book}
              city={city}
              avatar={avatar}
              name={name}
              status={status}
              rating={rating}
            />
          );
        });
      }
    });
  };

  return (
    <section className={classes.main__content}>
      <Filters />
      {renderBooks()}
    </section>
  );
};

export default MainPage;
