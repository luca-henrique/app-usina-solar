import React from 'react';

import styled from 'styled-components/native';
import GenerateGraphEnergyConsumed from './src/context/GenerateGraphEnergyConsumedContext';
import {HomeScreen} from './src/screens';

export const Container = styled.ScrollView`
  flex: 1;
  z-index: -1;
`;

function App(): JSX.Element {
  return (
    <GenerateGraphEnergyConsumed>
      <HomeScreen />
    </GenerateGraphEnergyConsumed>
  );
}

export default App;
