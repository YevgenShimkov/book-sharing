import TooltipSlider, { handleRender } from './tooltipSlider';
import { FC } from 'react';

import classes from './slider-wrapper.module.scss';

const Sliders: FC<{
  sliderRatingHandler: (value: number[]) => void;
  min: number;
  max: number;
}> = ({ sliderRatingHandler, min, max }) => {
  const sliderChangeRatingHandler = (value: number | number[]) => {
    if (typeof value === 'object') {
      sliderRatingHandler(value);
    }
  };

  return (
    <div className={classes.slider__wrapper}>
      <TooltipSlider
        allowCross={false}
        range
        min={min}
        max={max}
        defaultValue={[0, 0]}
        tipFormatter={(value) => `${value}`}
        onChange={sliderChangeRatingHandler}
        tipProps={undefined}
      />
    </div>
  );
};

export default Sliders;
