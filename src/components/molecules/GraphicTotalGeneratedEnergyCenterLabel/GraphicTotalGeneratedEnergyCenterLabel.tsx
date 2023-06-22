import React from 'react';

import {Container, Text} from './style';

type GraphicTotalGeneratedEnergyCenterLabelProps = {
  amountSpent: string;
};

export const GraphicTotalGeneratedEnergyCenterLabel = ({
  amountSpent,
}: GraphicTotalGeneratedEnergyCenterLabelProps) => {
  return (
    <Container>
      <Text>{amountSpent}%</Text>
      <Text>KWh</Text>
    </Container>
  );
};
