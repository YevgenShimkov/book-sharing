import React, { BaseSyntheticEvent, FC, KeyboardEvent, useState } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import useDebaunce from '../../helpers/useDebaunce';

import classes from './search.module.scss';

/**
 * search by user entered data
 * checks when press Search, Enter - debaunce will not work.
 *
 * @returns search element
 */
const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearchActive, setSearchActive] = useState<boolean>(true); // tracking button search presses
  const [isSearchValid, setSearchValid] = useState<boolean>(true); //

  // change in search field
  const inputChangeHandler = (event: BaseSyntheticEvent) => {
    setSearchValue(event.target.value);
    setSearchActive(false);
    setSearchValid(true);
  };

  // press 'search' button
  const searchButtonHandler = () => {
    if (searchValue.trim().length > 0 && isSearchValid) {
      changesHandler();
    }
  };

  // press 'Enter' button
  const pressEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      searchValue.trim().length > 0 &&
      event.key === 'Enter' &&
      isSearchValid
    ) {
      changesHandler();
    }
  };

  // change state some elements
  const changesHandler = () => {
    testSearchBookHandler(searchValue);
    setSearchActive(true);
    setSearchValid(false);
  };

  // debaunce
  // TODO fetch for find books
  const debaunceAction = () => {
    if (searchValue.trim().length > 0 && !isSearchActive) {
      changesHandler();
    }
  };

  // use debaunce, set timer delay & actions
  const debaunce = useDebaunce({
    depend: [isSearchActive, searchValue],
    debaunceAction: debaunceAction,
    delay: 1500,
  });

  // action
  // TODO search book by title / autor
  const testSearchBookHandler = (entered: string) => {};

  return (
    <div className={classes.search}>
      <Input
        className='search'
        id='search'
        placeholder='Search by title, author'
        onChange={inputChangeHandler}
        onKeyDown={pressEnterHandler}
      />
      <span onClick={searchButtonHandler}></span>
      <Button type='button' className={'search'} onClick={searchButtonHandler}>
        Search
      </Button>
    </div>
  );
};

export default Search;
