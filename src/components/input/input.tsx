import { BaseSyntheticEvent, FC, KeyboardEvent } from 'react';

import classes from './input.module.scss';

type Props = {
  children?: React.ReactNode;
  id: string;
  label?: string;
  placeholder: string;
  className: string;
  onChange: (event: BaseSyntheticEvent) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
};

/**
 *
 * @param param0
 * @returns
 */
const Input: FC<Props> = ({
  className,
  id,
  placeholder,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className={classes[className]}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
