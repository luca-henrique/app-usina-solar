import React from 'react';
import {Text} from './style';

type TypographyProps = {
  children?: any;
};

export const Typography = ({children}: TypographyProps) => {
  return <Text>{children}</Text>;
};
