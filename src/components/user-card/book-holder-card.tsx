import { FC } from 'react';
import Image from 'next/image';

import Avatar from '../avatar/avatar';
import Button from '../button/button';
import classes from './book-holder-card.module.scss';
import rating from '../raiting/rating';

type Props = {
  avatar: string;
  status: boolean;
  name: string;
  city: string;
  rating?: number;
};

const BookHolderCard: FC<Props> = ({ avatar, status, city, name, rating }) => {
  const followButtonHandler = () => {};
  const chatHandler = () => {};

  return (
    <div className={classes.bookholder}>
      <div className={classes.wrapper}>
        <div className={classes.avatar}>
          <Avatar imgsrc={avatar} height={36} width={36} />
          <div className={classes.status}> {status ? 'online' : 'offline'}</div>
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{name}</div>
          <div className={classes.city}>{city}</div>
        </div>
      </div>

      <div className={classes.additionally}>
        <Button type='button' className='follow' onClick={followButtonHandler}>
          Follow
        </Button>
        <div
          className={`${classes.chat__rating} ${
            rating ? '' : classes['centered']
          } `}
        >
          <div className={classes.chat} onClick={chatHandler}>
            <Image
              src={'/assets/icons/chat.svg'}
              height={20}
              width={20}
              alt='chat icon'
            />
          </div>

          <div className={classes.rating}>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default BookHolderCard;
