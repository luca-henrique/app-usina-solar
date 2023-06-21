import React, {useState} from 'react';
import {View} from 'react-native';

import {Group} from '../..';

export const Filters = ({getData}: any) => {
  const [selected, setSelected] = useState('1');

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Group
        active={selected === '1'}
        onPress={() => {
          getData('hourly');
          setSelected('1');
        }}>
        Hora
      </Group>
      <Group
        active={selected === '2'}
        onPress={() => {
          getData('daily');
          setSelected('2');
        }}>
        Dia
      </Group>
      <Group
        active={selected === '3'}
        onPress={() => {
          getData('monthly');
          setSelected('3');
        }}>
        Mês
      </Group>
      <Group
        active={selected === '4'}
        onPress={() => {
          getData('yearly');
          setSelected('4');
        }}>
        Ano
      </Group>
    </View>
  );
};
