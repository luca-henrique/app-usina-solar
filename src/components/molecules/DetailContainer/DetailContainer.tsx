import {useState} from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {Typography} from '../../';
import {Images} from '../../../assets/icons';

export type DetailInformationProps = {
  icon: string;
  description: string;
  result: string;
  children?: any;
};

export const DetailInformation = ({
  icon,
  description,
  result,
  children,
}: DetailInformationProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 20,
          borderBottomWidth: 1.5,
          borderBottomColor: '#f8f9fa',
        }}>
        <View>
          <Image source={Images[icon]} />
          <View style={{marginTop: 8}} />
          <Typography>{description}</Typography>
          <View style={{marginTop: 8}} />
          <Typography>{result} </Typography>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{
              backgroundColor: 'rgba(208, 206, 255, 0.25)',
              padding: 8,
              borderRadius: 6,
            }}>
            <Image source={Images['graphic-icon']} />
          </TouchableOpacity>
        </View>
      </View>
      {visible && <>{children}</>}
    </>
  );
};
