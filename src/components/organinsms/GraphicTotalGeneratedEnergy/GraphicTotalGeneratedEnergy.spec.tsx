import React from 'react';
import {render} from 'react-native-testing-library';
import {GraphicTotalGeneratedEnergy} from './GraphicTotalGeneratedEnergy';

describe('App', () => {
  it('renders correctly', () => {
    render(<GraphicTotalGeneratedEnergy amountSpent={0} amountRemaining={0} />);
  });
});
