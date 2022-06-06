import { FC } from 'react';
import classes from './button.module.scss';

// params for button settings
type Props = {
  children?: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  classNames: string;
  onClick: () => void;
  disabled?: boolean;
};

/**
 * blank for the button
 * @param param0
 * @returns button according to the specified parameters
 */
const Button: FC<Props> = ({
  children,
  type,
  classNames,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`${classes[classNames]} ${classes.button}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
