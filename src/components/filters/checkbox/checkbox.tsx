import React, { ChangeEvent, FC } from 'react';

import classes from './checkbox.module.scss';

type Props = {
  labelText: string;
  checkboxHandler: (checked: boolean) => void;
  isChecked: boolean;
};

/**
 * Checkbox
 * @param param0
 * @returns
 */
const Checkbox: FC<Props> = ({ labelText, checkboxHandler, isChecked }) => {
  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    checkboxHandler(event.target.checked);
  };

  return (
    <label className={classes.label}>
      <input
        className={classes.input}
        type='checkbox'
        onChange={checkboxChangeHandler}
        checked={isChecked}
      />
      <span />
      {labelText}
    </label>
  );
};

export default Checkbox;
