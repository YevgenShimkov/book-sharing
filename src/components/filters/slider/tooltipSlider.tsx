import * as React from 'react';
import { useEffect, useRef } from 'react';
import Slider from 'rc-slider';
import type { SliderProps } from 'rc-slider';
import raf from 'rc-util/lib/raf';
import Tooltip from 'rc-tooltip';

type HandleTooltipObj = {
  value: number;
  children: React.ReactElement;
  visible: boolean;
  tipFormatter?: (value: number) => React.ReactNode;
};

const HandleTooltip = (props: HandleTooltipObj) => {
  const {
    value,
    children,
    visible,
    tipFormatter = (val) => `${val} %`,
    ...restProps
  } = props;

  const tooltipRef = useRef<any>();
  const rafRef = useRef<number | null>(null);

  const cancelKeepAlign = () => {
    raf.cancel(rafRef.current!);
  };

  const keepAlign = () => {
    rafRef.current = raf(() => {
      tooltipRef.current?.forcePopupAlign();
    });
  };

  useEffect(() => {
    visible ? keepAlign() : cancelKeepAlign();
    return cancelKeepAlign;
  }, [value, visible]);

  return (
    <Tooltip
      placement='bottom'
      overlay={tipFormatter(value)}
      overlayInnerStyle={{ minHeight: 'auto' }}
      ref={tooltipRef}
      visible={visible}
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};

const TooltipSlider = ({
  tipFormatter,
  tipProps,
  ...props
}: SliderProps & {
  tipFormatter?: (value: number) => React.ReactNode;
  tipProps: any;
}) => {
  const tipHandleRender: SliderProps['handleRender'] = (node, handleProps) => {
    return (
      <HandleTooltip
        value={handleProps.value}
        visible={!!handleProps.value}
        // visible={handleProps.dragging}
        tipFormatter={tipFormatter}
        {...tipProps}
      >
        {node}
      </HandleTooltip>
    );
  };

  return <Slider {...props} handleRender={tipHandleRender} />;
};

export default TooltipSlider;
