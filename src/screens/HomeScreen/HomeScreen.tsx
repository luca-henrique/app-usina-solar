import React from 'react';

import {
  IGenerateGraphEnergyConsumed,
  GenerateGraphEnergyConsumedContext,
} from '../../context/GenerateGraphEnergyConsumedContext';

import {ContentDetailsInformation, Header} from '../../components';

import {Container} from './style';

export const HomeScreen = () => {
  const {loading} = React.useContext(
    GenerateGraphEnergyConsumedContext,
  ) as IGenerateGraphEnergyConsumed;

  return (
    <Container>
      <Header />
      {loading ? <></> : <ContentDetailsInformation />}
    </Container>
  );
};
