import React from 'react';
import {render} from 'react-native-testing-library';
import {GraphicEnergyGenerate} from './GraphicEnergyGenerate';

describe('App', () => {
  it('renders correctly', () => {
    render(<GraphicEnergyGenerate data={[]} />);
  });
});
