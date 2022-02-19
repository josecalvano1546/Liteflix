import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { themeApp } from '../../../styles/themeApp';
import * as Animatable from 'react-native-animatable';

// Components
import TopBarScreen from '../../topBarScreens/TopBarScreens';

// Images
import Img1 from '../../../assets/images/favorite/imgUno.png';
import Img2 from '../../../assets/images/favorite/imgDos.png';
import Img3 from '../../../assets/images/favorite/imgTres.png';

const FavoriteScreen = ({ navigation }) => {
  const imgOne = useRef();
  const imgTwo = useRef();
  const imgThree = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // clean controls
      animationOne();
      animationTwo();
      animationThree();
    });
    return unsubscribe;
  }, [navigation]);

  const animationOne = () => {
    // Play card one and two
    imgOne.current.fadeInLeft(700);
  };

  const animationTwo = () => {
    // Play card one and two
    imgTwo.current.fadeInRight(700);
  };

  const animationThree = () => {
    // Play card three
    imgThree.current.fadeInDown(800);
  };

  return (
    <View style={[themeApp.backgroundStyle, style.container]}>
      <TopBarScreen navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={[
            themeApp.TitleTextLight,
            {
              textAlign: 'center',
              marginTop: themeApp.hp('10%'),
            },
          ]}>
          No tienes pelis favoritas
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={[style.circle]} />
        <View style={[style.imgContain, style.imgUno]}>
          <Animatable.Image
            style={style.img}
            resizeMode="contain"
            source={Img1}
            ref={imgOne}
          />
        </View>

        <View style={[style.imgContain, style.imgDos]}>
          <Animatable.Image
            style={style.img}
            resizeMode="contain"
            source={Img2}
            ref={imgTwo}
          />
        </View>

        <View style={[style.imgContain, style.imgTres]}>
          <Animatable.Image
            style={style.img}
            resizeMode="contain"
            source={Img3}
            ref={imgThree}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: '15%',
        }}>
        <Text style={[themeApp.textRegularTrans, { textAlign: 'center' }]}>
          Tenemos miles de peliculas que pueden interesarte
        </Text>
      </View>
    </View>
  );
};
export default FavoriteScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: themeApp.hp('100%'),
    width: themeApp.wp('60%'),
    height: themeApp.wp('60%'),
  },
  imgContain: {
    width: themeApp.wp('41%'),
    height: themeApp.wp('51%'),
    position: 'absolute',
    paddingBottom: themeApp.hp('3%'),
  },

  img: {
    width: null,
    flex: 1,
  },

  imgUno: {
    right: 0,
    left: themeApp.hp('5%'),
    top: themeApp.hp('10%'),
  },
  imgDos: {
    right: themeApp.hp('5%'),
    top: themeApp.hp('10%'),
  },
  imgTres: {
    top: themeApp.hp('5.5%'),
  },
});
