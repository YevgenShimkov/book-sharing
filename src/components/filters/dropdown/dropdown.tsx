import { ChangeEvent, FC } from 'react';
import classes from './dropdown.module.scss';

/**
 *
 * @param param0 value- default;
 * @returns
 */
const Dropdown: FC<{
  dropList: { dropListItm: string; id: number }[];
  value: string;
  onChangeDropdown: (selectedDropdown: string) => void;
  isGanreSelected?: boolean;
}> = ({ dropList, value, onChangeDropdown, isGanreSelected }) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeDropdown(event.target.value);
  };

  return (
    <div className={classes.droprs__wrapper}>
      <select
        value={value}
        onChange={dropdownChangeHandler}
        disabled={isGanreSelected && isGanreSelected}
      >
        {dropList.map((itm) => {
          return <option key={itm.id}>{itm.dropListItm}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
