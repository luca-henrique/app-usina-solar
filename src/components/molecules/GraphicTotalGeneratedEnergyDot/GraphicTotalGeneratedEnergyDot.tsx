import React from 'react';

import {Dot} from './style';

type DotGraphicProps = {
  color: string;
};

export const GraphicTotalGeneratedEnergyDot = ({color}: DotGraphicProps) => {
  return <Dot color={color} />;
};
