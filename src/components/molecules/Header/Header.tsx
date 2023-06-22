import React from 'react';
import {Text} from 'react-native';
import {Dropdown} from '../../atoms/Dropdown/Dropdown';
import {Container} from './style';
import {selectOptions} from '../../../common';

export const Header = ({setType}: any) => {
  return (
    <Container>
      <Text>Resumo</Text>
      <Dropdown data={selectOptions} setValue={item => setType(item)} />
    </Container>
  );
};
