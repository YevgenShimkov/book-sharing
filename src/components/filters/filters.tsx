import { useState } from 'react';

import Button from '../button/button';
import Card from '../card/Card';
import Slider from './slider/slider';
import Checkbox from './checkbox/checkbox';
import Dropdown from './dropdown/dropdown';
import classes from './filters.module.scss';

// TEST some data
const Genre = [
  { dropListItm: 'Fantasy', id: 1 },
  { dropListItm: 'Mystery', id: 2 },
  { dropListItm: 'Adventure', id: 3 },
  { dropListItm: 'Western', id: 4 },
  { dropListItm: 'Genre', id: 5 },
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
  const [isAvailableChecked, setAvailableChecked] = useState(false);
  const [isPledgedChecked, setPlegedChecked] = useState(false);
  const [selectedGanre, setSelectedGanre] = useState('Genre');
  const [isGanreSelected, setGanreSelected] = useState(true); // for disuble
  const [selectedSubgenre, setSelectedSubgenre] = useState('Subgenre');
  const [selectedSorting, setSelectedSorting] = useState('Sorting');
  const [selectedLanguage, setSelectedLanguage] = useState('Language');
  const [selectedCity, setSelectedCity] = useState('City');
  const [bookRating, setBookRating] = useState<number[]>([0, 0]);
  const [userRating, setUserRating] = useState<number[]>([0, 0]);

  // checkboks handlers
  const checkboxAvailableHandler = (checked: boolean) => {
    setAvailableChecked(checked);
  };

  const checkboxPledgedHandler = (checked: boolean) => {
    setPlegedChecked(checked);
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
    if (selectedDropdown === 'Genre') {
      setGanreSelected(true);
      setSelectedSubgenre('Subgenre');
    } else {
      setGanreSelected(false);
    }
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
  const applyButtonHandler = () => {};
  const resetButtonHandler = () => {
    setSelectedGanre('Genre');
    setGanreSelected(true); // for subgenre disable
    setSelectedSubgenre('Subgenre');
    setSelectedSorting('Sorting');
    setSelectedLanguage('Language');
    setSelectedCity('City');
    setAvailableChecked(false);
    setPlegedChecked(false);
    setBookRating([0, 0]);
    setUserRating([0, 0]);
  };

  return (
    <Card className='filter'>
      <h2 className={classes.title}>Filters</h2>
      <div className={classes.accessibility}>
        <Checkbox
          labelText='available books'
          checkboxHandler={checkboxAvailableHandler}
          isChecked={isAvailableChecked}
        />
        <Checkbox
          labelText='book pledged'
          checkboxHandler={checkboxPledgedHandler}
          isChecked={isPledgedChecked}
        />
      </div>
      <h3 className={`${classes.title} ${classes.subtitle}`}>Book rating</h3>
      <Slider
        sliderRatingHandler={sliderBookRatingHandler}
        min={0}
        max={5}
        value={bookRating}
      />
      <h3 className={`${classes.title} ${classes.subtitle}`}>User rating</h3>
      <Slider
        sliderRatingHandler={sliderUserRatingHandler}
        min={0}
        max={200}
        value={userRating}
      />
      <Dropdown
        dropList={Genre}
        value={selectedGanre}
        onChangeDropdown={dropdownGanreHandler}
      />
      <Dropdown
        dropList={Genre}
        value={selectedSubgenre}
        onChangeDropdown={dropdownSubgenreHandler}
        isGanreSelected={isGanreSelected}
      />
      <Dropdown
        dropList={Genre}
        value={selectedSorting}
        onChangeDropdown={dropdownSortingHandler}
      />
      <Dropdown
        dropList={Genre}
        value={selectedLanguage}
        onChangeDropdown={dropdownLanguageHandler}
      />
      <Dropdown
        dropList={Genre}
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
