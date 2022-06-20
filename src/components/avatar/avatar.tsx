import Image from 'next/image';
import { FC } from 'react';
import classes from './avatar.module.scss';

type Props = {
  imgsrc: string;
  height: number;
  width: number;
};

const Avatar: FC<Props> = ({ imgsrc, height, width }) => {
  return (
    <Image
      className={classes.avatar}
      src={imgsrc}
      height={height}
      width={width}
      alt={'avatar'}
    />
  );
};

export default Avatar;
