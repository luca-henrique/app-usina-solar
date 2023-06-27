import React from 'react';
import {render} from 'react-native-testing-library';
import {TopBarGraphicText} from './TopBarGraphicText';

describe('App', () => {
  it('renders correctly', () => {
    const {getByText} = render(<TopBarGraphicText>Grave</TopBarGraphicText>);

    expect(getByText('Grave'));
  });
});
