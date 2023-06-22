import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

import {Container} from './style';

type GraphicEnergyGenerateProps = {
  data: any[];
};

export const GraphicEnergyGenerate = ({data}: GraphicEnergyGenerateProps) => {
  return (
    <Container>
      <BarChart
        barWidth={42}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
        xAxisLabelTextStyle={{color: '#6c757d'}}
        yAxisTextStyle={{color: '#6c757d'}}
      />
    </Container>
  );
};
