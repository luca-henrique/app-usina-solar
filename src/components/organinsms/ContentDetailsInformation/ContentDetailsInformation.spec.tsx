import React from 'react';
import {render} from 'react-native-testing-library';
import {ContentDetailsInformation} from './ContentDetailsInformation';

describe('App', () => {
  it('renders correctly', () => {
    render(<ContentDetailsInformation />);
  });
});
