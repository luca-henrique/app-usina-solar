import React from 'react';

import {GraphicTotalGeneratedEnergyDot} from '../GraphicTotalGeneratedEnergyDot/GraphicTotalGeneratedEnergyDot';

import {Container, ContainerDetailLegend, Text} from './style';

type GraphicTotalGeneratedEnergyLegendProps = {
  amountSpent: string;
  amountRemaining: string;
};

export const GraphicTotalGeneratedEnergyLegend = ({
  amountSpent,
  amountRemaining,
}: GraphicTotalGeneratedEnergyLegendProps) => {
  return (
    <Container>
      <ContainerDetailLegend>
        <GraphicTotalGeneratedEnergyDot color="#006DFF" />
        <Text>Gastos: {amountSpent}%</Text>
      </ContainerDetailLegend>
      <ContainerDetailLegend>
        <GraphicTotalGeneratedEnergyDot color="#FF7F97" />
        <Text>Restante: {amountRemaining}%</Text>
      </ContainerDetailLegend>
    </Container>
  );
};
