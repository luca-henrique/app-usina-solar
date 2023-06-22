import React from 'react';
import {render} from 'react-native-testing-library';
import {GraphicTotalGeneratedEnergyDot} from './GraphicTotalGeneratedEnergyDot';

describe('App', () => {
  it('renders correctly', () => {
    render(<GraphicTotalGeneratedEnergyDot color="#fff" />);
  });
});
