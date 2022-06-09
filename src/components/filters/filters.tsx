import { useState } from 'react';

import Button from '../button/button';
import Card from '../../helpers/Card';
import Slider from './slider/slider';
import Checkbox from './checkbox/checkbox';
import Dropdown from './dropdown/dropdown';
import classes from './filters.module.scss';

// TEST some data
const Ganre = [
  { dropListItm: 'Fantasy', id: 1 },
  { dropListItm: 'Mystery', id: 2 },
  { dropListItm: 'Adventure', id: 3 },
  { dropListItm: 'Western', id: 4 },
  { dropListItm: 'Ganre', id: 5 },
  { dropListItm: 'Subgenre', id: 6 },
  { dropListItm: 'Sorting', id: 7 },
  { dropListItm: 'Language', id: 8 },
  { dropListItm: 'City', id: 9 },
];

/**
 * collection of basic filter elements
 * @returns filter card
 */
const Filters = () => {
  // dropdown state element
  const [selectedGanre, setSelectedGanre] = useState('Ganre');
  const [selectedSubgenre, setSelectedSubgenre] = useState('Subgenre');
  const [selectedSorting, setSelectedSorting] = useState('Sorting');
  const [selectedLanguage, setSelectedLanguage] = useState('Language');
  const [selectedCity, setSelectedCity] = useState('City');
  const [availableBook, setAvailableBook] = useState(false);
  const [pledgedBook, setPledgedBook] = useState(false);
  const [bookRating, setBookRating] = useState<number[]>([]);
  const [userRating, setUserRating] = useState<number[]>([]);

  // checkboks handlers
  const checkboxAvailableHandler = (checked: boolean) => {
    setAvailableBook(checked);
  };

  const checkboxPledgedHandler = (checked: boolean) => {
    setPledgedBook(checked);
  };

  // sliders handlers
  const sliderBookRatingHandler = (value: number[]) => {
    setBookRating(value);
  };

  const sliderUserRatingHandler = (value: number[]) => {
    setUserRating(value);
  };

  // dropdown handlers
  const dropdownGanreHandler = (selectedDropdown: string) => {
    setSelectedGanre(selectedDropdown);
  };
  const dropdownSubgenreHandler = (selectedDropdown: string) => {
    setSelectedSubgenre(selectedDropdown);
  };
  const dropdownSortingHandler = (selectedDropdown: string) => {
    setSelectedSorting(selectedDropdown);
  };
  const dropdownLanguageHandler = (selectedDropdown: string) => {
    setSelectedLanguage(selectedDropdown);
  };
  const dropdownCityHandler = (selectedDropdown: string) => {
    setSelectedCity(selectedDropdown);
  };

  // button handlers
  const applyButtonHandler = () => {
    console.log('apply button in ACTION');
  };
  const resetButtonHandler = () => {
    console.log('to the trash all filters');
  };

  return (
    <Card className='filter'>
      <h2 className={classes.title}>Filters</h2>
      <div className={classes.accessibility}>
        <Checkbox
          labelText='available books'
          checkboxHandler={checkboxAvailableHandler}
        />
        <Checkbox
          labelText='book pledged'
          checkboxHandler={checkboxPledgedHandler}
        />
      </div>
      <h3 className={`${classes.title} ${classes.subtitle}`}>Book rating</h3>
      <Slider sliderRatingHandler={sliderBookRatingHandler} min={0} max={5} />
      <h3 className={`${classes.title} ${classes.subtitle}`}>User rating</h3>
      <Slider sliderRatingHandler={sliderUserRatingHandler} min={0} max={200} />
      <Dropdown
        dropList={Ganre}
        value={selectedGanre}
        onChangeDropdown={dropdownGanreHandler}
      />
      <Dropdown
        dropList={Ganre}
        value={selectedSubgenre}
        onChangeDropdown={dropdownSubgenreHandler}
      />
      <Dropdown
        dropList={Ganre}
        value={selectedSorting}
        onChangeDropdown={dropdownSortingHandler}
      />
      <Dropdown
        dropList={Ganre}
        value={selectedLanguage}
        onChangeDropdown={dropdownLanguageHandler}
      />
      <Dropdown
        dropList={Ganre}
        value={selectedCity}
        onChangeDropdown={dropdownCityHandler}
      />
      <div className={classes.button__wrapper}>
        <Button type='button' className={''} onClick={applyButtonHandler}>
          Apply
        </Button>
        <Button
          type='button'
          className={'secondary'}
          onClick={resetButtonHandler}
        >
          Reset
        </Button>
      </div>
    </Card>
  );
};

export default Filters;
