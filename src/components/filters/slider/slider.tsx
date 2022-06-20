import TooltipSlider from './tooltipSlider';
import { FC } from 'react';

import classes from './slider-wrapper.module.scss';

type Props = {
  sliderRatingHandler: (value: number[]) => void;
  min: number;
  max: number;
  value: number[];
};

const Sliders: FC<Props> = ({ sliderRatingHandler, min, max, value }) => {
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
        value={value}
        tipFormatter={(value) => `${value}`}
        onChange={sliderChangeRatingHandler}
        tipProps={undefined}
      />
    </div>
  );
};

export default Sliders;
