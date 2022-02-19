import React from 'react';
import {  View } from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
const IconTab = Props => {
  return (
    <View style={{ width: wp(7), height: wp(6), marginTop: '20%' }}>
      <Animatable.Image
       animation="fadeInUp"
       duration={1000}
       delay={Props.tiempo}
        source={Props.focused ? Props.imgSelect : Props.img}
        resizeMode={'contain'}
        style={{ width: null, flex: 1 }}
      />
    </View>
  );
};
export default IconTab;
