import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Utils
import { baseUrl, fileSize } from '../../../utils/constants';

// Style
import { themeApp } from '../../styles/themeApp';

// Images
import PlayPopular from '../../assets/images/iconsApp/playPopular.png';

const SearchFilm = Props => {

  const image = { uri: `${baseUrl}${fileSize}${Props.backdrop}` };

  return (
    <View style={[themeApp.backgroundDisabled, style.container]}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ height: '100%', width: themeApp.wp('30%') }}>
        <LinearGradient
          locations={[0.35, 0.6, 0.95]}
          colors={themeApp.shadowBackdrop}
          style={style.shadow}></LinearGradient>
      </ImageBackground>
      <Text
        style={[
          themeApp.textRegular,
          { width: themeApp.wp('50%'), marginLeft: '2%' },
        ]}>
        {Props.title}
      </Text>
      <TouchableOpacity onPress={Props.onPress}>
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
      </TouchableOpacity>
    </View>
  );
};
export default SearchFilm;

const style = StyleSheet.create({
  container: {
    height: themeApp.hp('13%'),
    width: themeApp.wp('100%'),
    marginBottom: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
