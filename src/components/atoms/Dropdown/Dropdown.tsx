import React, {useState} from 'react';

import {
  ContainerDropdown,
  Text,
  ContainerList,
  ContainerItemDropdownList,
} from './style';
import {Image} from 'react-native';
import {Images} from '../../../assets/icons';

type DropdownProps = {
  data?: any[];
  value?: string;
  setValue: (value: string) => void;
};

export const Dropdown = ({
  data = [],
  value = 'Escolha',
  setValue,
}: DropdownProps) => {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState(value);

  return (
    <ContainerDropdown
      onPress={() => setVisible(!visible)}
      visible={visible}
      testID="container-dropdown-list">
      <>
        <Text>{item}</Text>
        <Image source={Images['arrow-down-icon']} />
      </>
      {visible && (
        <ContainerList>
          {data.map((obj, index) => {
            let lastItem = index === data.length - 1;
            return (
              <ContainerItemDropdownList
                key={`${obj.label}-${index}`}
                lastItem={lastItem}>
                <Text
                  onPress={() => {
                    setItem(obj.label);
                    setVisible(false);
                    setValue(obj.value);
                  }}>
                  {obj.label}
                </Text>
              </ContainerItemDropdownList>
            );
          })}
        </ContainerList>
      )}
    </ContainerDropdown>
  );
};
