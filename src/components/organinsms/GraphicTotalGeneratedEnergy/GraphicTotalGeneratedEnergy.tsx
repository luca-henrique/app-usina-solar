import React from 'react';
import {PieChart} from 'react-native-gifted-charts';

import {GraphicTotalGeneratedEnergyLegend} from '../../molecules/GraphicTotalGeneratedEnergyLegend/GraphicTotalGeneratedEnergyLegend';
import {GraphicTotalGeneratedEnergyCenterLabel} from '../../molecules/GraphicTotalGeneratedEnergyCenterLabel/GraphicTotalGeneratedEnergyCenterLabel';

import {Container, GraphicContainer, Text, Main} from './style';

export const GraphicTotalGeneratedEnergy = () => {
  let valorGasto = (72.0 / 113.325) * 100;
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
                  amountSpent={valorGasto.toFixed()}
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
