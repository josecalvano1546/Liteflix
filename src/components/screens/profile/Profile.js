import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeApp } from '../../../styles/themeApp';
import * as Animatable from 'react-native-animatable';

// Components
import TopBarScreen from '../../topBarScreens/TopBarScreens';

// Images
import UsuOne from '../../../assets/images/profile/usuOne.png';
import UsuTwo from '../../../assets/images/profile/usuTwo.png';
import UsuThree from '../../../assets/images/profile/usuThree.png';

const data = [
  { id: 0, img: UsuOne, name: 'Jose Calvano' },
  { id: 1, img: UsuTwo, name: 'Fabricio Calvano' },
  { id: 2, img: UsuThree, name: 'Sol Calvano' },
];

const ProfileScreen = ({ navigation }) => {
  const [select, setSelect] = useState(0);
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(2);

  // Text animated
  const userName = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // clean controls
      animationText();
    });
    return unsubscribe;
  }, [navigation]);

  const animationText = () => {
    // Play card one and two
    userName.current.bounceIn(700);
  };

  return (
    <View style={[style.container, themeApp.backgroundStyle]}>
      <TopBarScreen navigation={navigation} />
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: themeApp.hp('5%'),
        }}>
        <View style={style.containerCircle}>
          <Image
            resizeMode="cover"
            style={style.imgCircle}
            source={data[select].img}
          />
        </View>
        <Animatable.Text
          ref={userName}
          style={[themeApp.TitleTextLight, { marginTop: themeApp.hp('5%') }]}>
          {data[select].name}
        </Animatable.Text>
      </View>
      <View style={style.containerOpt}>
        <View style={style.containerMini}>
          <TouchableOpacity
            onPress={() => {
              const aux = left;
              setLeft(select);
              setSelect(aux);
            }}
            style={style.containerMini}>
            <Image
              style={style.imgCircle}
              resizeMode="cover"
              source={data[left].img}
            />
          </TouchableOpacity>
        </View>
        <View style={style.containerMini}>
          <TouchableOpacity
            onPress={() => {
              const aux = right;
              setRight(select);
              setSelect(aux);
            }}
            style={style.containerMini}>
            <Image
              style={style.imgCircle}
              resizeMode="cover"
              source={data[right].img}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={themeApp.textRegularTrans}>¿Quién esta mirando?</Text>
      </View>
    </View>
  );
};
export default ProfileScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgCircle: {
    width: null,
    flex: 1,
    borderRadius: 500,
  },
  containerOpt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  containerCircle: {
    width: themeApp.wp('40%'),
    height: themeApp.wp('40%'),
    borderRadius: themeApp.hp('100%'),
  },
  containerMini: {
    width: themeApp.wp('20%'),
    height: themeApp.wp('20%'),
    borderRadius: themeApp.hp('100%'),
  },
});
