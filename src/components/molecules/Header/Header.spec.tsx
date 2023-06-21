import React from 'react';
import {render} from 'react-native-testing-library';
import {Header} from './Header';

describe('App', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Header />);
    const welcomeText = getByText('Resumo');
    expect(welcomeText).toBeDefined();
  });
});
