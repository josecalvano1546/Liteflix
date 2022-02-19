import React, { useEffect, useRef, useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  // TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { themeApp } from '../../styles/themeApp';
import { baseUrl, fileSize } from '../../../utils/constants';
// Images
import PlayPopular from '../../assets/images/iconsApp/playPopular.png';
import Start from '../../assets/images/iconsApp/start.png';

const PopularFilms = Props => {
  const Populares = Props.select === 'Populares';
  // Image background.
  const image = { uri: `${baseUrl}${fileSize}${Props.backdrop}` };
  const myImage = { uri: Props.image };

  // Animation
  const viewRefOut = useRef();
  const viewRefIn = useRef();
  const [play, setPLay] = useState(false);

  useEffect(() => {
    // Load animations
    InPlay(); // Modificar aca la primera vez
  }, []);
  const outPlay = () => {
    // Play Out
    viewRefOut.current.fadeOut(100);
    setPLay(true);
    InPlayDesc();
  };

  const InPlay = () => {
    // Play In
    viewRefOut.current.fadeIn(500);
    setPLay(false);
    OutPlayDesc();
  };

  const InPlayDesc = () => {
    // Description In
    viewRefIn.current.fadeIn(1000);
  };
  const OutPlayDesc = () => {
    // Description Out
    viewRefIn.current.fadeOut(100);
  };

  return (
    <View style={[style.container, themeApp.backgroundStyle]}>
      <ImageBackground
        source={Populares ? image : myImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 6 }}
        style={{ height: '100%', width: '100%' }}>
        <LinearGradient
          locations={!play ? [0.35, 0.6, 0.95] : [1, 1]}
          colors={
            !play
              ? themeApp.shadowBackdrop
              : ['rgba(36,36,36,0.7)', 'rgba(36,36,36,0.7)']
          }
          style={style.shadow}>
          <Animatable.View
            ref={viewRefOut}
            style={[
              style.butomPlay,
              {
                zIndex: play ? 0 : 1,
              },
            ]}>
            <TouchableWithoutFeedback
              disabled={play}
              onPress={() => {
                outPlay();
              }}>
              <View
                style={{
                  width: themeApp.wp('15%'),
                  height: themeApp.wp('15%'),
                }}>
                <Image
                  source={PlayPopular}
                  style={{ width: null, flex: 1 }}
                  resizeMode="contain"
                />
              </View>
            </TouchableWithoutFeedback>
            <View>
              <Text style={[themeApp.textRegular]}>{Props.title}</Text>
            </View>
          </Animatable.View>

          <Animatable.View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              paddingHorizontal: '8%',
            }}
            ref={viewRefIn}>
            <TouchableWithoutFeedback
              disabled={!play}
              onPress={() => {
                InPlay();
              }}>
              <View
                style={{
                  // backgroundColor: 'blue',
                  height: '100%',
                  paddingBottom: '10%',
                  justifyContent: 'flex-end',
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      width: themeApp.wp('9%'),
                      height: themeApp.wp('9%'),
                    }}>
                    <Image
                      source={PlayPopular}
                      style={{ width: null, flex: 1 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[themeApp.textRegular, { marginLeft: '3%' }]}>
                    {Props.title}
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: '8%',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={{
                        width: themeApp.wp('9%'),
                        height: themeApp.wp('4%'),
                      }}>
                      {Populares ? (
                        <Image
                          source={Start}
                          style={{ width: null, flex: 1 }}
                          resizeMode="contain"
                        />
                      ) : null}
                    </View>
                    <Text style={[themeApp.textRegular, { marginLeft: '3%' }]}>
                      {Props.average}
                    </Text>
                  </View>
                  <View>
                    <Text style={[themeApp.textRegular, { marginLeft: '3%' }]}>
                      {Populares ? Props.date.slice(0, 4) : null}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Animatable.View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default PopularFilms;

const style = StyleSheet.create({
  container: {
    height: themeApp.hp('29%'),
    marginVertical: themeApp.hp('1.6%'),
    marginHorizontal: themeApp.hp('1.2%'),
  },
  shadow: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  subTitle: { flexDirection: 'row', alignSelf: 'center' },
  butomPlay: {
    alignItems: 'center',
    height: themeApp.hp('15%'),
    justifyContent: 'space-between',
    marginTop: '8%',
  },
});
