import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { themeApp } from '../../styles/themeApp';

// Image
import Check from '../../assets/images/iconsApp/check.png';

const OptionCheck = Props => {
  const select = Props.select === Props.titulo;
  return (
    <TouchableOpacity
      onPress={() => {
        Props.setSelect(Props.titulo);
      }}
      style={style.container}>
      <Text
        style={select ? themeApp.textBold : themeApp.textRegular}>
        {Props.titulo}
      </Text>

      {select ? (
        <View
          style={{
            width: themeApp.wp(3.5),
            height: themeApp.wp(3.5),
            marginLeft: '2%',
          }}>
          <Image
            resizeMode="contain"
            style={{ width: null, flex: 1 }}
            source={Check}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
export default OptionCheck;

const style = StyleSheet.create({
container:{
  width: '100%',
  height: themeApp.hp('5%'),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2%',
}
})