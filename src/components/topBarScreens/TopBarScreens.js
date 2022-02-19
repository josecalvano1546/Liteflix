import React from 'react';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { themeApp } from '../../styles/themeApp';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

// Images
import Logo from '../../../src/assets/images/topBar/logo.png';
import User from '../../../src/assets/images/topBar/profile.png';
import Home from '../../assets/images/topBar/home.png';

// Var animations
const HEIGHT_STATUSBAR =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
const HEADER_HEIGHT = HEIGHT_STATUSBAR + themeApp.hp('8%');

const TopBarScreen = Props => {
  return (
    <Animated.View style={style.container}>
      <View
        // save status bar
        style={style.guardStatusBar}
      />
      <View
        // Top bar container
        style={style.TopBarContainer}>
        <View style={style.circleTop}>
          <TouchableOpacity
            onPress={() => {
              Props.navigation.navigate('Home');
            }}
            style={style.circleHome}>
            <Image
              style={style.imageContain}
              resizeMode="cover"
              source={Home}
            />
          </TouchableOpacity>
        </View>
        <View style={style.logoTop}>
          <Image
            style={style.iconosContain}
            resizeMode="contain"
            source={Logo}
          />
        </View>
        <View style={style.circleTop}>
          <TouchableOpacity
            onPress={() => {
              Props.navigation.navigate('Profile');
            }}
            style={style.circleTop}>
            <Image
              style={style.profileContain}
              resizeMode="cover"
              source={User}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};
export default TopBarScreen;
const style = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: HEADER_HEIGHT,
    backgroundColor: 'rgba(0, 0,0, 0.1)',
    zIndex: 1000,
    elevation: 1000,
  },
  guardStatusBar: {
    width: '100%',
    height: HEIGHT_STATUSBAR,
  },
  TopBarContainer: {
    height: HEADER_HEIGHT - HEIGHT_STATUSBAR,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  circleTop: {
    width: themeApp.wp('10%'),
    height: themeApp.wp('10%'),
    borderRadius: 50,
  },
  logoTop: {
    width: themeApp.wp('26.84%'),
    height: themeApp.wp('7.67%'),
  },
  iconosContain: {
    width: null,
    flex: 1,
  },
  profileContain: {
    width: null,
    flex: 1,
    borderRadius: 50,
  },
  imageContain: {
    width: null,
    flex: 1,
  },
  circleHome: {
    width: themeApp.wp('8%'),
    height: themeApp.wp('4%'),
    marginTop: themeApp.wp('2.5%'),
  },
});
