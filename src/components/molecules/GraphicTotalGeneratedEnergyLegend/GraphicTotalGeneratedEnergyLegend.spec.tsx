import React from 'react';
import {render} from 'react-native-testing-library';
import {GraphicTotalGeneratedEnergyLegend} from './GraphicTotalGeneratedEnergyLegend';

describe('App', () => {
  it('renders correctly', () => {
    render(
      <GraphicTotalGeneratedEnergyLegend
        amountSpent={''}
        amountRemaining={''}
      />,
    );
  });
});
