import React, { useState } from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { View } from 'react-native-animatable';
import { themeApp } from '../../styles/themeApp';

// Component
import OptionCheck from './OptionsCheck';

// Image
import Arrow from '../../assets/images/iconsApp/arrow.png';

const Options = Props => {
  const [select, setSelect] = useState(false);
  return (
    <View  style={[themeApp.backgroundStyle]}>
      <TouchableOpacity
        onPress={() => {
          setSelect(true);
        }}
        style={[themeApp.backgroundStyle, style.container]}>
        <View style={{ flexDirection: 'row', alignItems:'center' }}>
          <Text style={themeApp.textRegular}>Ver: </Text>
          <Text style={themeApp.textBold}>{Props.select}</Text>
          <View style={style.image}>
            <Image
              resizeMode="contain"
              style={{ width: null, flex: 1 }}
              source={Arrow}
            />
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={select}
        onRequestClose={() => {
          setSelect(false);
        }}>
        <TouchableHighlight
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
            },
          ]}
          onPressOut={() => {
            setSelect(false);
          }}
          underlayColor="false">
          <TouchableWithoutFeedback>
            <View style={[style.shadow]}>
              <OptionCheck
                titulo={'Populares'}
                select={Props.select}
                setSelect={Props.setSelect}
              />
              <OptionCheck
                titulo={'Mis peliculas'}
                select={Props.select}
                setSelect={Props.setSelect}
              />
            </View>
          </TouchableWithoutFeedback>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};
export default Options;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: themeApp.hp('10%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: themeApp.hp('4%'),
  },
  image: {
    width: themeApp.wp(3.5),
    height: themeApp.wp(3.5),
    marginLeft: '2%',
  },
  shadow: {
    width: '100%',
    height: themeApp.hp('17%'),
    padding: themeApp.wp('4%'),
    flexDirection: 'column',
    backgroundColor: '#242424',
  },
});
