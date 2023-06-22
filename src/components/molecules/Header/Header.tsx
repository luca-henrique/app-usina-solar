import React from 'react';
import {Text} from 'react-native';
import {Dropdown} from '../../atoms/Dropdown/Dropdown';
import {Container} from './style';
import {selectOptions} from '../../../common';

export const Header = () => {
  return (
    <Container>
      <Text>Resumo</Text>
      <Dropdown data={selectOptions} setValue={item => console.log(item)} />
    </Container>
  );
};
