import React from 'react';
import {render} from 'react-native-testing-library';
import {Dropdown} from './Dropdown';

describe('App', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Dropdown data={[]} setValue={evt => console.log(evt)} value="Welcome" />,
    );
    const welcomeText = getByText('Welcome');
    expect(welcomeText).toBeDefined();
  });
});
