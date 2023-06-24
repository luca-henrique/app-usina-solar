import React from 'react';
import {render} from 'react-native-testing-library';
import {HomeScreen} from './HomeScreen';

describe('App', () => {
  it('renders correctly', () => {
    render(<HomeScreen />);
  });
});
