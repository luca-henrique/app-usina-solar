import React from 'react';

import {Container, Text} from './style';

export type GroupProps = {
  onPress?: any;
  children?: any;
  active?: boolean;
};

export const Group = ({onPress, children, active}: GroupProps) => {
  return (
    <Container active={active} onPress={() => onPress()}>
      <Text active={active}>{children}</Text>
    </Container>
  );
};
