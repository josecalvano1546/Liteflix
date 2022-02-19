import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { themeApp } from '../../styles/themeApp';

const ButtonWithoutBorder = Props => {
  return (
    <TouchableOpacity
      onPress={Props.onPress}
      style={[
        themeApp.ButtonWithoutBorder,
        {
          marginTop: '5%',
          marginBottom: '2%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: Props.Image ? themeApp.wp(4) : 0,
            height: Props.Image ? themeApp.wp(4) : 0,
            marginRight: Props.Image ? '3%' : 0,
          }}>
          <Image
            resizeMode="contain"
            style={{ width: null, flex: 1 }}
            source={Props.Image}
          />
        </View>
        <Text style={[themeApp.textRegular]}>{Props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonWithoutBorder;
