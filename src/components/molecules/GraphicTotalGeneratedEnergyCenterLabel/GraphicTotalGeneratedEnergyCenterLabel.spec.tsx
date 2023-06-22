import React from 'react';
import {render} from 'react-native-testing-library';
import {GraphicTotalGeneratedEnergyCenterLabel} from './GraphicTotalGeneratedEnergyCenterLabel';

describe('App', () => {
  it('renders correctly', () => {
    render(<GraphicTotalGeneratedEnergyCenterLabel amountSpent={''} />);
  });
});
