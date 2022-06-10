import Card from '../../helpers/Card';
import Rating from '../raiting/rating';
import classes from 'book-card.module.scss';

const BookCard = () => {
  return (
    <Card className={'book'}>
      <h1>Hello book card</h1>
      <Rating />
    </Card>
  );
};

export default BookCard;
