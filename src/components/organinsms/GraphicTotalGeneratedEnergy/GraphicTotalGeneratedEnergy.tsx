import React from 'react';
import {PieChart} from 'react-native-gifted-charts';

import {GraphicTotalGeneratedEnergyLegend} from '../../molecules/GraphicTotalGeneratedEnergyLegend/GraphicTotalGeneratedEnergyLegend';
import {GraphicTotalGeneratedEnergyCenterLabel} from '../../molecules/GraphicTotalGeneratedEnergyCenterLabel/GraphicTotalGeneratedEnergyCenterLabel';

import {Container, GraphicContainer, Text, Main} from './style';

type GraphicTotalGeneratedEnergyProps = {
  amountSpent: any;
  amountRemaining: number;
};

export const GraphicTotalGeneratedEnergy = ({
  amountSpent = 10,
  amountRemaining = 10,
}: GraphicTotalGeneratedEnergyProps) => {
  let valorGasto = (amountSpent / amountRemaining) * 100;
  let valorRestante = 100 - valorGasto;

  const pieData = [
    {
      value: valorGasto,
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
      focused: true,
    },
    {value: valorRestante, color: '#FF7F97', gradientCenterColor: '#FF7F97'},
  ];

  return (
    <Container>
      <GraphicContainer>
        <Text>Consumo de energia</Text>
        <Main>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#232B5D'}
            // eslint-disable-next-line react/no-unstable-nested-components
            centerLabelComponent={() => {
              return (
                <GraphicTotalGeneratedEnergyCenterLabel
                  amountSpent={amountSpent}
                />
              );
            }}
          />
        </Main>
        <GraphicTotalGeneratedEnergyLegend
          amountSpent={valorGasto.toFixed()}
          amountRemaining={valorRestante.toFixed()}
        />
      </GraphicContainer>
    </Container>
  );
};
