import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { themeApp } from '../../styles/themeApp';

const ButtonWithBorder = Props => {
  return (
    <TouchableOpacity
      onPress={Props.onPress}
      style={[
        themeApp.ButtonWithBorder,
        {
          marginTop: '5%',
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
export default ButtonWithBorder;
