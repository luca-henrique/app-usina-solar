import React from 'react';

import styled from 'styled-components/native';
import GenerateGraphEnergyConsumed from './src/context/GenerateGraphEnergyConsumedContext';
import {HomeScreen} from './src/screens';

export const Container = styled.ScrollView`
  flex: 1;
  z-index: -1;
`;

type DataType = 'hourly' | 'daily' | 'monthly' | 'yearly';

interface ITotal {
  co2: number;
  kwh: number;
  percentage: number;
  trees: number;
}

interface IDataGraphic {
  value: number;
  label: string;
  frontColor: string;
}

interface IDetails {
  generationTotal: number;
  totals: ITotal;
  graphicData: IDataGraphic;
  totalEnergyGenereted: number;
  expected: number;
}

function App(): JSX.Element {
  return (
    <GenerateGraphEnergyConsumed>
      <HomeScreen />
    </GenerateGraphEnergyConsumed>
  );
}

export default App;
