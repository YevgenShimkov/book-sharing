import React, { ChangeEvent, FC } from 'react';

import classes from './checkbox.module.scss';

type Props = {
  labelText: string;
  checkboxHandler: (checked: boolean) => void;
};

const Checkbox: FC<Props> = ({ labelText, checkboxHandler }) => {
  const checkboksChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    checkboxHandler(event.target.checked);
  };

  return (
    <label className={classes.label}>
      <input
        className={classes.input}
        type='checkbox'
        onChange={checkboksChangeHandler}
      />
      <span />
      {labelText}
    </label>
  );
};

export default Checkbox;
