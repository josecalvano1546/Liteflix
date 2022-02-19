import React from 'react';
import { Text, View } from 'react-native';
import { themeApp } from '../../styles/themeApp';

const EmptySection = (Props) => {
  return (
    <View
      style={[
        themeApp.backgroundStyle,
        {
          height: themeApp.hp('29%'),
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text style={[themeApp.textRegularTrans, { textAlign: 'center' }]}>
        {Props.text}
      </Text>
    </View>
  );
};
export default EmptySection;
