import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import Logo from '../../assets/images/topBar/logo.png';

const Splash = () => {
  return (
    <View style={styles.mainContainer}>
      <Animated.View>
        <View style={{ height: 120, width: 120, top: 10 }}>
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            duration={500}
            style={{ flex: 1, width: null }}
            resizeMode={'contain'}
            source={Logo}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: wp('100%'),
    height: hp('90%'),
    backgroundColor: 'rgba(36,36,36,0.9)',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
