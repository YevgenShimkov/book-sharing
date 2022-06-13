import { useEffect } from 'react';

type Props = {
  depend: (string | boolean | ((status: boolean) => void))[];
  debaunceAction: () => void;
  delay: number;
};

/**
 * debaunce
 *
 * @param {dependence, action, time to delay}
 */
const UseDebaunce = ({ depend, debaunceAction, delay }: Props) => {
  useEffect(() => {
    const timerSearch = setTimeout(() => {
      debaunceAction();
    }, delay);
    return () => {
      clearTimeout(timerSearch);
    };
    // OR  }, [ debaunceAction? delay]);
  }, [...depend]);
};

export default UseDebaunce;
