import React from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from '../../atoms/Dropdown/Dropdown';

const data = [
  {label: 'Hora', value: 'hourly'},
  {label: 'Dia', value: 'daily'},
  {label: 'Mês', value: 'monthly'},
  {label: 'Ano', value: 'yearly'},
];

export const SelectGroup = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>Resumo</Text>

      <Dropdown data={data} setValue={item => console.log(item)} />
    </View>
  );
};
