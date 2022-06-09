import { ChangeEvent, FC } from 'react';
import classes from './dropdown.module.scss';

const Dropdown: FC<{
  dropList: { dropListItm: string; id: number }[];
  value: string;
  onChangeDropdown: (selectedDropdown: string) => void;
}> = ({ dropList, value, onChangeDropdown }) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeDropdown(event.target.value);
  };

  return (
    <div className={classes.droprs__wrapper}>
      <select value={value} onChange={dropdownChangeHandler}>
        {dropList.map((itm) => {
          return <option key={itm.id}>{itm.dropListItm}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
