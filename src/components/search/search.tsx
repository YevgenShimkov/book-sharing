import React, { BaseSyntheticEvent, FC, KeyboardEvent, useState } from 'react';
import Button from '../UI/button';
import Input from '../UI/input';
import useDebaunce from '../helpers/useDebaunce';

import classes from './search.module.scss';

/**
 * search by user entered data
 * @param isSearch- foo setIsSearching from  main-banner for change background in main page
 * @returns search element
 */
const Search: FC<{ isSearch: (status: boolean) => void }> = ({ isSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearchActive, setIsSearchActive] = useState<boolean>(true); // tracking button search presses
  const [isSearchValid, setIsSearchValid] = useState<boolean>(true); //

  // change in search field
  const inputChangeHandler = (event: BaseSyntheticEvent) => {
    setSearchValue(event.target.value);
    setIsSearchActive(false);
    setIsSearchValid(true);
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
    setIsSearchActive(true);
    isSearch(true);
    setIsSearchValid(false);
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
    depend: [isSearch, isSearchActive, searchValue],
    debaunceAction: debaunceAction,
    delay: 1500,
  });

  // action
  // TODO search book for name
  const testSearchBookHandler = (entered: string) => {
    console.log('try to find your ' + entered + ' book');
  };

  return (
    <div className={classes.search}>
      <Input
        className='search'
        id='search'
        placeholder='Search by title, author'
        onChange={inputChangeHandler}
        onKeyDown={pressEnterHandler}
      />
      <Button type='button' classNames={'search'} onClick={searchButtonHandler}>
        Search
      </Button>
    </div>
  );
};

export default Search;
