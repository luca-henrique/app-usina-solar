import React, {useState} from 'react';

import {
  ContainerDropdown,
  Text,
  ContainerList,
  ContainerItemDropdownList,
} from './style';

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
    <ContainerDropdown onPress={() => setVisible(!visible)} visible={visible}>
      <Text>{item}</Text>
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
                    setValue(item);
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
