import React from 'react';
import {Text} from 'react-native';
import {Dropdown} from '../../atoms/Dropdown/Dropdown';
import {Container} from './style';
import {selectOptions} from '../../../common';
import {
  GenerateGraphEnergyConsumedContext,
  IGenerateGraphEnergyConsumed,
} from '../../../context/GenerateGraphEnergyConsumedContext';

export const Header = () => {
  const {setType} = React.useContext(
    GenerateGraphEnergyConsumedContext,
  ) as IGenerateGraphEnergyConsumed;

  return (
    <Container>
      <Text>Resumo</Text>
      <Dropdown data={selectOptions} setValue={(item: any) => setType(item)} />
    </Container>
  );
};
